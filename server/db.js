import dotenv from "dotenv";
import pg from "pg";

dotenv.config({ path: "./server/.env" });

const { Pool } = pg;
const db_conn = new Pool({
  connectionString: 'postgresql://postgres:EvlZRLjkzjBNoKZPjPXJ@containers-us-west-184.railway.app:5660/railway',
});

export default db_conn;
