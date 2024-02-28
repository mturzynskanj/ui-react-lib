export function randomColor() {
  return `rgba(${colorValue()}, ${colorValue()}, ${colorValue()}, 0.5)`;
}
export function colorValue() {
  return Math.random() * 255;
}
