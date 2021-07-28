import { DispatchHandler, DispatchOpts } from "./internals/types";
import * as Error from "./internals/error/errors";
import { resourceLimits } from "worker_threads";

export const findMatch = <TReturn, TDispatch>(
  types: TDispatch[],
  dispatchers: DispatchHandler<TReturn, TDispatch>[],
  options: DispatchOpts<TDispatch>,
  throwOverride?: boolean
) => {
  const willThrowOverride = (throwOverride ??= options.throw);

  if (!options.ignoreArity && types.length !== options.params.length) {
    if (options.throw) {
      Error.InvalidTypeCount;
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
};
