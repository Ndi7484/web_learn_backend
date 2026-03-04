// api/index.js
import { panTask01_1 } from "../lib/pan/task01_1.js";
import { panTask01_2 } from "../lib/pan/task01_2.js";
import { panTask01_3 } from "../lib/pan/task01_3.js";
import { pfnTask01_1 } from "../lib/pfn/task01_1.js";
import { pfnTask01_2 } from "../lib/pfn/task01_2.js";
import { pfnTask02_1 } from "../lib/pfn/task02_1.js";
import { pfnTask04_1 } from "../lib/pfn/task04_1.js";
import { pfnTask04_2 } from "../lib/pfn/task04_2.js";
import { pfnTask04_3 } from "../lib/pfn/task04_3.js";
import { pfnTask04_4 } from "../lib/pfn/task04_4.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  let body = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    console.error("Failed to parse body", e);
  }

  const { folder, task } = body;
  let result;

  if (folder === "pan") {
    switch (task) {
      case "task01_1":
        result = panTask01_1(body.num);
        break;
      case "task01_2":
        result = panTask01_2(body.num);
        break;
      case "task01_3":
        result = panTask01_3(body.p1, body.p2);
        break;
      default:
        result = { output: [{ color: "red", text: "Unknown pan task" }] };
    }
  } else if (folder === "pfn") {
    switch (task) {
      case "task01_1":
        result = pfnTask01_1();
        break;
      case "task01_2":
        result = pfnTask01_2(body.ev);
        break;
      case "task02_1":
        result = pfnTask02_1(body.ev);
        break;
      case "task04_1":
        result = pfnTask04_1();
        break;
      case "task04_2":
        result = pfnTask04_2();
        break;
      case "task04_3":
        result = pfnTask04_3();
        break;
      case "task04_4":
        result = pfnTask04_4();
        break;
      default:
        result = { output: [{ color: "red", text: "Unknown pfn task" }] };
    }
  } else {
    result = { output: [{ color: "red", text: "Unknown folder" }] };
  }

  res.status(200).json({ output: result });
}