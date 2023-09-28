import dotenv from "dotenv";

dotenv.config();
import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  // min: 0,
  // max: 10,
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  // createTimeoutMillis: 8000,
  // acquireTimeoutMillis: 8000,
  // idleTimeoutMillis: 8000,
  // reapIntervalMillis: 1000,
  // createRetryIntervalMillis: 100,
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});
