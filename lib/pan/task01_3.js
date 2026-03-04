// lib/pan/task01_3.js
export function panTask01_3(p1, p2) {
  function centerText(text, length = 31) {
    if (text.length >= length) return text;
    const totalPadding = length - text.length;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;
    return " ".repeat(leftPadding) + text + " ".repeat(rightPadding);
  }

  function leftText(text, length = 15) {
    if (text.length >= length) return text;
    return text.padEnd(length, " ");
  }

  function rightText(text, length = 15) {
    if (text.length >= length) return text;
    return text.padStart(length, " ");
  }

  // Split the incoming strings into [name, height]
  const parts1 = (p1 || "").trim().split(/\s+/);
  const parts2 = (p2 || "").trim().split(/\s+/);

  return [
    { color: "blue", text: "Person 1 | Name and Height: " },
    { color: "black", text: p1 },
    { color: "black", text: "\n" },
    { color: "blue", text: "Person 2 | Name and Height: " },
    { color: "black", text: p2 },
    { color: "black", text: "\n" },
    { color: "blue", text: centerText("List") },
    { color: "black", text: "\n" },
    { color: "blue", text: "=".repeat(31) },
    { color: "black", text: "\n" },
    { color: "blue", text: `${leftText(parts1[0])}|${rightText(parts1[1] || "")}` },
    { color: "black", text: "\n" },
    { color: "blue", text: `${leftText(parts2[0])}|${rightText(parts2[1] || "")}` },
    { color: "black", text: "\n" },
    { color: "blue", text: "=".repeat(31) },
  ];
}