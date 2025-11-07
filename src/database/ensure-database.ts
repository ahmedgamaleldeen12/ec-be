import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

export async function ensureDatabase() {
  const dbName = process.env.DB_NAME;
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: 'postgres', 
  });

  try {
    await client.connect();

    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`,[dbName],);

    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
      console.log(`✅ Database "${dbName}" created successfully`);
    } else {
      console.log(`✅ Database "${dbName}" already exists`);
    }
  } catch (error) {
    console.error('❌ Error ensuring database:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}
