import "./dotenv.js";
import { pool } from "./database.js";
import eventData from "../data/events.js";
import locationData from "../data/locations.js";

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(120) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  await pool.query(createTableQuery);
  console.log("🎉 Locations table created successfully");
};

const seedLocationsTable = async () => {
  await createLocationsTable();

  const insertQuery = `
    INSERT INTO locations (slug, name, description)
    VALUES ($1, $2, $3)
  `;

  for (const location of locationData) {
    const values = [location.slug, location.name, location.description];
    await pool.query(insertQuery, values);
    console.log(`✅ ${location.name} added successfully`);
  }
};

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      image VARCHAR(255) NOT NULL
    );
  `;

  await pool.query(createTableQuery);
  console.log("🎉 Events table created successfully");
};

const seedEventsTable = async () => {
  await createEventsTable();

  const insertQuery = `
    INSERT INTO events (
      name,
      location,
      date,
      time,
      image
    ) VALUES ($1, $2, $3, $4, $5)
  `;

  for (const event of eventData) {
    const values = [
      event.name,
      event.location,
      event.date,
      event.time,
      event.image,
    ];

    await pool.query(insertQuery, values);
    console.log(`✅ ${event.name} added successfully`);
  }
};

const reset = async () => {
  try {
    await seedLocationsTable();
    console.log("🌱 Locations table seeded successfully");

    await seedEventsTable();
    console.log("🌱 Events table seeded successfully");
  } catch (err) {
    console.error("⚠️ error seeding Events table", err);
    throw err;
  } finally {
    await pool.end();
  }
};

reset()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
