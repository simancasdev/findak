class ErrorHandler extends Error {
  public error: string | undefined;
  public code: number | undefined;

  constructor(message?: string, code?: number) {
    super(message);
    this.error = message;
    this.code = code;
  }
}

export {ErrorHandler};
