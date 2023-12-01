export const showSeparator = <T>(key: number, array: T[]): boolean => {
  return key + 1 !== array.length;
};
