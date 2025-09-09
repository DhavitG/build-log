import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_dpA8HIBK6oLq@ep-orange-unit-adgr3syz-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

async function main() {
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users2;");
  console.log(response);
}

main();
