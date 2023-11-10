const { MongoClient } = require("mongodb");

require("dotenv").config();

const NODE_ENV = process.argv[2];
if (NODE_ENV === undefined)
  return res.send("Expected node environment argument to be specified");
else if (NODE_ENV !== "PROD" && NODE_ENV !== "DEV")
  return res.send("Unexpected value for node environment argument");

// JWT Configuration
const jwt = require("jsonwebtoken");

// Express Server
const express = require("express");
const app = express();
const port = NODE_ENV == "PROD" ? process.env.PROD_PORT : process.env.DEV_PORT;
app.listen(port, () => console.log(`Listening on port ${port}!`));

//MongoBD Configuration
const uri =
  NODE_ENV == "PROD" ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI;
const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

client.connect();

// Routes
app.get("/", function (req, res) {
  res.status(200);
  res.send("Welocme to AniMangaHub!");
});

app.get("/get-carousel-items", async (req, res) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "carousel_items";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  try {
    const cursor = await collection.find().toArray();

    res.send(cursor);
  } catch (err) {
    res.send(`Something went wrong trying to find the documents: ${err}\n`);
  }
});

app.post("/add-carousel-item", async (req, res) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "carousel_items";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const item = {
    name: "Rent a Girlfriend",
    genre: "Romance, Comedy",
    rating: 3,
    release: 2017,
    type: "series",
    duration: "23m",
    url: "rentagirlfriend.jpg",
  };

  try {
    const insertOne = await collection.insertOne(item);
    res.send(`${insertOne.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    res.send(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
});

//Examples
app.get("/get-recipes", async (req, res, next) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "recipes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  try {
    const cursor = await collection.find().toArray();

    res.send(cursor);
  } catch (err) {
    res.send(`Something went wrong trying to find the documents: ${err}\n`);
  }
});

app.get("/get-recipe", async (req, res, next) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "recipes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const findOneQuery = { ingredients: req.query.ingredient };

  try {
    const findOneResult = await collection.findOne(findOneQuery);

    if (findOneResult === null) {
      res.send(
        "Couldn't find any recipes that contain " +
          req.query.ingredient +
          " as an ingredient.\n"
      );
    } else {
      res.send(findOneResult);
    }
  } catch (err) {
    res.send(`Something went wrong trying to find one document: ${err}\n`);
  }
});

app.post("/add-recipe", async (req, res, next) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "recipes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const recipe = {
    name: "cozonac",
    ingredients: ["faina", "oua", "lapte", "drojdie", "esente de rom"],
    prepTimeInMinutes: 120,
  };

  try {
    const insertOne = await collection.insertOne(recipe);
    res.send(`${insertOne.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    res.send(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
});

app.put("/update-recipe", async (req, res, next) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "recipes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const findOneQuery = { name: "cozonac" };

  const updateDoc = { $set: { prepTimeInMinutes: 180 } };

  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions
    );
    res.send(
      `Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`
    );
  } catch (err) {
    res.send(`Something went wrong trying to update one document: ${err}\n`);
  }
});

app.delete("/delete-recipe", async (req, res, next) => {
  const dbName =
    NODE_ENV == "PROD"
      ? process.env.PROD_MONGO_DATABASE
      : process.env.DEV_MONGO_DATABASE;

  const collectionName = "recipes";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const deleteQuery = { name: "cozonac" };
  try {
    const deleteResult = await collection.deleteOne(deleteQuery);
    res.send(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    res.send(`Something went wrong trying to delete documents: ${err}\n`);
  }
});
