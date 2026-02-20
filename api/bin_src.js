export default function handler(req, res) {
  if (req.method === "POST") {
    const { arr = [], target } = req.body;

    let left = 0, right = arr.length - 1;
    let foundIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        foundIndex = mid;
        break;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    res.status(200).json({ index: foundIndex });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}