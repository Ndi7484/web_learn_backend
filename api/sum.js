import { withCORS } from "./_utils.js";

function sumHandler(req, res) {
  let body = {};
  try {
    body = req.body ? JSON.parse(req.body) : {};
  } catch (e) {
    console.error("Failed to parse body", e);
  }

  const { a, b } = body;
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

export default withCORS(sumHandler);