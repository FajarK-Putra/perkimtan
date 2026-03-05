import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://fjrkurnia1112_db_user:cApQRnHUmQge3Jsn@cluster-perkim.4nzs0m1.mongodb.net/?appName=cluster-perkim";

// if (!uri && process.env.NODE_ENV !== "production") {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (uri) {
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
} else {
  // During build phase on Vercel, the URI might be missing.
  if (process.env.NODE_ENV === "production") {
    console.warn("MONGODB_URI is missing. Database features will be unavailable.");
  }
  // Reject the promise so that await doesn't hang infinitely
  clientPromise = Promise.reject(new Error("MONGODB_URI is missing from environment variables."));
  
  // Suppress unhandled rejection warning immediately
  clientPromise.catch(() => {});
}

// Export a module-scoped MongoClient promise.
export default clientPromise;