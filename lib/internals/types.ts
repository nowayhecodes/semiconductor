type Class<T> = new (...args: any[]) => T;

export interface DispatchOpts<TDispatch> {
  name: string;
  params: Array<{
    name: string;
    isa?: (special: TDispatch, general: TDispatch) => boolean;
  }>;
  throw?: boolean;
  ignoreArity?: boolean;
}

export interface Dispatcher<TReturn, TDispatch> {
  name: string;
  override(
    types: TDispatch[],
    callback: (...types: TDispatch[]) => TReturn
  ): boolean;
  dispatch(...types: TDispatch[]): TReturn | null;
}

export interface DispatchHandler<TReturn, TDispatch> {
  types: TDispatch[];
  handler: (...types: TDispatch[]) => TReturn;
}

export type Dispatch = (...args: any[]) => any;
export type MethodEntry = [any, any];
export type MethodEntries = MethodEntry[];
export type DefaultMethod = ((arg0: any, arg1?: any) => any) | null;

export type ValueCaseEntry = {
  type: "value";
  value: any;
};

export type ConstructorCaseEntry = {
  type: "constructor";
  value: new (...args: any[]) => Class<any>;
};

export type FunctionCaseEntry = {
  type: "function";
  value: (...args: any[]) => boolean;
};

export type MixedCaseEntry = {
  type: "mixed";
  values: Array<ConstructorCaseEntry | ValueCaseEntry>;
};

export type CaseEntry =
  | ValueCaseEntry
  | ConstructorCaseEntry
  | FunctionCaseEntry
  | MixedCaseEntry;

export type Internals = {
  methodEntries: MethodEntries;
  defaultMethod: DefaultMethod;
  dispatch: Dispatch;
};

export type Multiple = {
  [multimethodKey]: Internals;
};

export type Multimethod = ((...args: any[]) => any) & Multiple;

export type MethodFun = (
  arg0: any,
  arg1?: any
) => (multiMethod: Multimethod) => Multimethod;

export type MultiFun = (
  arg0?: Dispatch | MethodFun,
  ...method: MethodFun[]
) => Multimethod;
