export function panTask01_2(num) {
  const parts = num.trim().split(",");

  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    const n = parseInt(parts[i]);
    total += n;
  }

  return [
    { color: "blue", text: "Numbers: " },
    { color: "black", text: num },
    { color: "black", text: "\n" },
    { color: "blue", text: "Sum = " },
    { color: "blue", text: total.toString() }
  ];
}