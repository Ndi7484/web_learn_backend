export default function handler(req, res) {
  res.status(200).json({
    items: ["apple", "banana", "cherry"]
  });
}