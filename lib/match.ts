import { DispatchHandler, DispatchOpts } from "./internals/types";
import * as Error from "./internals/error/errors";

type TFindMatch<R, D> = DispatchHandler<R, D> | R | null;

export const findMatch = <TReturn, TDispatch>(
  types: TDispatch[],
  dispatchers: DispatchHandler<TReturn, TDispatch>[],
  options: DispatchOpts<TDispatch>,
  throwOverride?: boolean
): TFindMatch<TReturn, TDispatch> => {
  const willThrowOverride = (throwOverride ??= options.throw);

  if (!options.ignoreArity && types.length !== options.params.length) {
    if (options.throw) {
      Error.InvalidTypeCountError;
    }
    return null;
  }

  const results: {
    matches: number;
    dispatcher: DispatchHandler<TReturn, TDispatch>;
  }[] = [];

  for (const dispatcher of dispatchers) {
    let matches: number = 0;
    let typeIndex: number = 0;

    for (const type of types) {
      const isa = (options.params[typeIndex].isa ||= (special, general) =>
        special === general);

      const dispatchType = dispatcher.types[typeIndex++];

      if (isa(type, dispatchType)) {
        matches++;
      }
    }
    results.push({ matches, dispatcher });
  }

  const max: number = Math.max(...results.map(result => result.matches));
  const maxMatches = results.filter(result => result.matches === max);

  if (max === 0) {
    if (willThrowOverride) {
      Error.NoMatchError;
    }
    return null;
  }

  if (max !== types.length) {
    if (willThrowOverride) {
      Error.SpecificMatchNotFoundError([types.toString()]);
    }

    return null;
  }

  if (maxMatches.length > 1) {
    if (willThrowOverride) {
      Error.MultipleMatchesFoundError([types.toString()]);
    }

    return null;
  }

  return maxMatches[0].dispatcher.handler(...types);
};
