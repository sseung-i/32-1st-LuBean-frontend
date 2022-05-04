export const makeStar = data => {
  return "★".repeat(data) + "☆".repeat(5 - data);
};
