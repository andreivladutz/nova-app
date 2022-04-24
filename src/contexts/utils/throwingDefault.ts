const throwingDefault = <T extends object>(ctxName: string) =>
  new Proxy<T>({} as T, {
    get() {
      throw new Error(`${ctxName} context provider is not initialised!`);
    },
  });

export default throwingDefault;
