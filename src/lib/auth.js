import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MY_AUTH);
const db = client.db("my-db");

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    },
    database: mongodbAdapter(db, {
        client
    }),
});