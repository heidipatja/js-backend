const mongo = require("mongodb").MongoClient;
const dsn =  "mongodb://localhost:27017/chat";

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));

resetCollection(dsn, "chatlog", docs)
    .catch(err => console.log(err));

async function resetCollection(dsn, collection, doc) {
    const client  = await mongo.connect(dsn);
    const db = await client.db();
    const col = await db.collection(collection);

    await col.deleteMany();
    await col.insertMany(doc);

    await client.close();
}
