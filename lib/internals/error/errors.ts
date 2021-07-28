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

export const AmbiguousError = ExtendedErrorClass(
  "AmbiguousError",
  "Ambiguous declaration."
);

export const NoMatchError = ExtendedErrorClass(
  "NoMatchError",
  "This declaration has no match."
);

export const InvalidOverride = ExtendedErrorClass(
  "InvalidOverride",
  "This override is invalid."
);

export const InvalidTypeCount = ExtendedErrorClass(
  "InvalidTypeCount",
  "The types here are invalid."
);

export type ExtendedErrorUnion =
  | typeof NoMethodError
  | typeof NoArgumentsError
  | typeof FirstArgumentError
  | typeof NotAMethodError
  | typeof NotAMultiMethodError
  | typeof AmbiguousError
  | typeof NoMatchError
  | typeof InvalidOverride
  | typeof InvalidTypeCount;
