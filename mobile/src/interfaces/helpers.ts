export type AutoComplete<T extends string> = T | Omit<string, T>;

export type JSONKeys<T extends {}> = keyof T;
