#! /usr/bin/env node

const { Client } = require("pg");

// Get the database URL from the command line argument
const connectionString = process.argv[2];

if (!connectionString) {
  console.error("❌ Error: Please provide a database connection string.");
  console.error("Usage: node db/populateDb.js <database-url>");
  process.exit(1);
}

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon')
ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("🌱 Seeding database...");

  const client = new Client({ connectionString });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("✅ Database successfully seeded!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();
