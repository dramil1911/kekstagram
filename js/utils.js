const checkStringLength = (srting, maxStringLength) => srting.length <= maxStringLength;
const getRandomPositiveNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscKey = (key) => {
  return key === 'Escape'
}

export { getRandomPositiveNumber, checkStringLength, isEscKey };
