// src/index.ts
function Accumulation(...value) {
  return value.reduce((t, v) => t + v, 0);
}
function Multiplication(...value) {
  return value.reduce((t, v) => t * v, 1);
}
export {
  Accumulation,
  Multiplication
};
