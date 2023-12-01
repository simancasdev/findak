export const getEffectiveness = <T, K>(
  data: T[] = [],
  rule: keyof T,
  expected: K
): number => {
  if (!data.length) return 0;
  return ~~(
    (data.filter((value) => value[rule] === expected).length / data.length) *
    100
  );
};
