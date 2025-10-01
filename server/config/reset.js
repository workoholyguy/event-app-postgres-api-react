import "./dotenv.js";
import { pool } from "./database.js";
import langData from "../data/languages.js";

const createlangsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS langs;

    CREATE TABLE IF NOT EXISTS langs (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      paradigm VARCHAR(255) NOT NULL,
      firstAppeared VARCHAR(255),
      typing VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      designedBy VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    );
  `;

  await pool.query(createTableQuery);
  console.log("🎉 Langs table created successfully");
};

const seedlangsTable = async () => {
  await createlangsTable();

  const insertQuery = `
    INSERT INTO langs (
      name,
      paradigm,
      firstAppeared,
      typing,
      description,
      designedBy,
      image
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;

  for (const lang of langData) {
    const values = [
      lang.name,
      lang.paradigm,
      lang.firstAppeared,
      lang.typing,
      lang.description,
      lang.designedBy,
      lang.image,
    ];

    await pool.query(insertQuery, values);
    console.log(`✅ ${lang.name} added successfully`);
  }
};

const reset = async () => {
  try {
    await seedlangsTable();
    console.log("🌱 langs table seeded successfully");
  } catch (err) {
    console.error("⚠️ error seeding langs table", err);
    throw err;
  } finally {
    await pool.end();
  }
};

reset()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
