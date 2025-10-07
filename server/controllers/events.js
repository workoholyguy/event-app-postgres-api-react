import { pool } from "../config/database.js";

export const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (err) {
    console.error("⚠️ Could not retrieve the events table", err);
    res.status(500).json({ error: err.message });
  }
};
