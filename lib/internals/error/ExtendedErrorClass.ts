type TCustomErrorClass = { new (details?: string): any };

type TExtendedErrorClass = (
  name: string,
  message: string,
  serializeStacktrace?: boolean
) => TCustomErrorClass;

export const ExtendedErrorClass: TExtendedErrorClass = (
  name,
  message,
  serializeStacktrace = false
) => {
  return class extends Error {
    public name: string;
    public message: string;

    constructor(details?: string) {
      const fullMessage = `${message}${details ? ` ${details}` : ""}`;

      super(fullMessage);
      this.name = name;
      this.message = fullMessage;
    }

    public toJSON() {
      return JSON.stringify({
        error: {
          name: this.name,
          message: this.message,
          ...(serializeStacktrace && { stacktrace: this.stack }),
        },
      });
    }
  };
};
