export const useCount = (action, count, max = 10) => {
  let auxCount = count;
  if (action === "SUMAR") {
    if (count < max) {
      auxCount++;
    }
  } else if (count > 0) {
    auxCount--;
  }
  return auxCount;
};
