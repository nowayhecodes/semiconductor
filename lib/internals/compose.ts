import { ArityOneFn } from "./compose.types";

export const compose =
  (...fns: ArityOneFn[]) =>
  (initialArg: any) =>
    fns.reduceRight((arg: any, fn: ArityOneFn) => fn(arg), initialArg);
