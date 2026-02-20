export default function handler(req, res) {
  if (req.method === "POST") {
    const { text = "" } = req.body;
    const parts = text.split(" ");

    res.status(200).json({
      output: parts.map(word => ({ color: "black", text: word }))
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}