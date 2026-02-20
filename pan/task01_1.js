export default function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Parse body safely
  let body = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    console.error("Failed to parse body", e);
  }

  const { a = 0, b = 0 } = body;
  const sum = a + b;

  res.status(200).json({
    output: [
      { color: "blue", text: "a = " },
      { color: "black", text: String(a) },
      { color: "black", text: "\n" },
      { color: "blue", text: "b = " },
      { color: "black", text: String(b) },
      { color: "black", text: "\n" },
      { color: "blue", text: "sum a + b is : " },
      { color: "blue", text: String(sum) }
    ]
  });
}