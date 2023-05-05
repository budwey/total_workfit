export const getScrollByPercentage = (percentage) => {
  const { innerHeight: height } = window;
  const result = height * (percentage / 100);
  return result;
};
