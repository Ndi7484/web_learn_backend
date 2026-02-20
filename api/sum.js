export default function handler(req, res) {
  const { a, b } = req.body || {};
  const sum = (a || 0) + (b || 0);

  res.status(200).json({
    output: [
      { color: "blue", text: "a=" },
      { color: "black", text: String(a) },
      { color: "black", text: "\n" },
      { color: "blue", text: "b=" },
      { color: "black", text: String(b) },
      { color: "black", text: "\n" },
      { color: "black", text: "sum a + b is : " },
      { color: "black", text: String(sum) }
    ]
  });
}