import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import languageData from "../data/languages.js";
import { getLangs } from "../controllers/langs.js";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const router = express.Router();

router.get("/", getLangs);

router.get("/:languageId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/language.html"));
});

export default router;
