import dotenv from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./db";
dotenv.config();

async function main() {
  await migrate(db, { migrationsFolder: "drizzle/migrations" });
  process.exit(0);
}

main();