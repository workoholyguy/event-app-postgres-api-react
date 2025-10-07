import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import eventData from "../data/events.js";
import { getEvents } from "../controllers/events.js";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const router = express.Router();

router.get("/", getEvents);

router.get("/:eventId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/event.html"));
});

export default router;
