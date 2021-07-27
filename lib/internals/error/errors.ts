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
