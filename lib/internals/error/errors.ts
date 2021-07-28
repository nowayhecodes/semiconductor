import { ExtendedErrorClass } from "./ExtendedErrorClass";

export const NoMethodError = ExtendedErrorClass(
  "NoMethodError",
  "No method was specified for provided arguments."
);

export const NoArgumentsError = ExtendedErrorClass(
  "NoArgumentsError",
  "Please provide at least one argument."
);

export const FirstArgumentError = ExtendedErrorClass(
  "FirstArgumentError",
  "First argument must be either a dispatch function or partially applied method."
);

export const NotAMethodError = ExtendedErrorClass(
  "NotAMethodError",
  "Argument is not a function or method."
);

export const NotAMultiMethodError = ExtendedErrorClass(
  "NotAMultiDispatchError",
  "Argument is not a multimethod."
);

export const AmbiguousError = (message: string) =>
  ExtendedErrorClass("AmbiguousError", message);

export const NoMatchError = ExtendedErrorClass(
  "NoMatchError",
  "This declaration has no match."
);

export const InvalidOverrideError = ExtendedErrorClass(
  "InvalidOverride",
  "This override is invalid."
);

export const InvalidTypeCountError = ExtendedErrorClass(
  "InvalidTypeCount",
  "The types here are invalid."
);

export const SpecificMatchNotFoundError = (types: string[]) =>
  ExtendedErrorClass(
    "SpecificMatchNotFoundError",
    `Specific match not found for ${types}`
  );

export const MultipleMatchesFoundError = (types: string[]) =>
  ExtendedErrorClass(
    "MultipleMatchesFoundError",
    `Multiple matches found for types ${types}`
  );

export type ExtendedErrorUnion =
  | typeof NoMethodError
  | typeof NoArgumentsError
  | typeof FirstArgumentError
  | typeof NotAMethodError
  | typeof NotAMultiMethodError
  | typeof AmbiguousError
  | typeof NoMatchError
  | typeof InvalidOverrideError
  | typeof InvalidTypeCountError
  | typeof SpecificMatchNotFoundError
  | typeof MultipleMatchesFoundError;
