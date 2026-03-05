import clientPromise from './src/lib/mongodb.ts';

async function test() {
  try {
    const client = await clientPromise;
    const db = client.db("berita_db");
    const count = await db.collection("berita").countDocuments();
    console.log(`Connection successful. Found ${count} documents in berita collection.`);
    process.exit(0);
  } catch (err) {
    console.error("Connection failed:", err);
    process.exit(1);
  }
}

test();
