export function panTask01_1(num) {
  const parts = num.trim().split(/\s+/);
  const radius = parseFloat(parts[0]) || 0;
  const height = parseFloat(parts[1]) || 0;
  const pi = 3.14;
  const formatted = (pi * radius * radius * height).toFixed(2);
  return [
      { color: "blue", text: "Numbers: " },
      { color: "black", text: `${String(radius)} ${String(height)}` },
      { color: "black", text: "\n" },
      { color: "blue", text: "Volume = " },
      { color: "blue", text: formatted }
    ];
}