export default function handler(req, res) {
  if (req.method === "POST") {
    const { a = 0, b = 0 } = req.body;

    res.status(200).json({
      output: [
        { color: "blue", text: "a = " },
        { color: "black", text: String(a) },
        { color: "black", text: "\n" },
        { color: "blue", text: "b = " },
        { color: "black", text: String(b) },
        { color: "black", text: "\n" },
        { color: "blue", text: "sum a + b is : " },
        { color: "blue", text: String(a + b) }
      ]
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}