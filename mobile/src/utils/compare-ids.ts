export const compareIds = (
  ids: [string, string],
  comparison: "equal" | "unequal" = "equal"
) => {
  if (comparison === "equal") return ids[0] === ids[1];
  return ids[0] !== ids[1];
};
