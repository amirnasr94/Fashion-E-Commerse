import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URI;

if (!URL) {
  throw new Error("Connot access to Mongodb!");
}

const client = new MongoClient(URL);

const dbName = "Fashion-Ecommerce";

export async function handleConnectedToMongo() {
  await client.connect();
  console.log("connected successfully!");
  const db = client.db(dbName);
  console.log(db);
}
