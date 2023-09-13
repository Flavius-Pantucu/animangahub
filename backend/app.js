const { MongoClient } = require("mongodb");

require("dotenv").config();

const NODE_ENV = process.argv[2];
if (NODE_ENV === undefined)
  return console.log("Expected node environment argument to be specified");
else if (NODE_ENV !== "PROD" && NODE_ENV !== "DEV")
  return console.log("Unexpected value for node environment argument");

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
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Routes
app.get("/", function (req, res) {
  res.status(200);
  res.send("Welocme to AniMangaHub!");
});

app.get("/test", function (req, res, next) {
  console.log("GET request called");
  res.end();
});

app.post("/test", function (req, res, next) {
  console.log("POST request called");
  res.end();
});

app.delete("/test", function (req, res, next) {
  console.log("DELETE request called");
  res.end();
});

app.put("/test", function (req, res, next) {
  console.log("PUT request called");
  res.end();
});

// mongodb examples

// await client.connect();

// const dbName = process.env.MONGO_DATABASE;
// const collectionName = "recipes";

// const database = client.db(dbName);
// const collection = database.collection(collectionName);

// const recipes = [
//   {
//     name: "elotes",
//     ingredients: [
//       "corn",
//       "mayonnaise",
//       "cotija cheese",
//       "sour cream",
//       "lime",
//     ],
//     prepTimeInMinutes: 35,
//   },
//   {
//     name: "loco moco",
//     ingredients: [
//       "ground beef",
//       "butter",
//       "onion",
//       "egg",
//       "bread bun",
//       "mushrooms",
//     ],
//     prepTimeInMinutes: 54,
//   },
//   {
//     name: "patatas bravas",
//     ingredients: [
//       "potato",
//       "tomato",
//       "olive oil",
//       "onion",
//       "garlic",
//       "paprika",
//     ],
//     prepTimeInMinutes: 80,
//   },
//   {
//     name: "fried rice",
//     ingredients: [
//       "rice",
//       "soy sauce",
//       "egg",
//       "onion",
//       "pea",
//       "carrot",
//       "sesame oil",
//     ],
//     prepTimeInMinutes: 40,
//   },
// ];

// try {
//   const insertManyResult = await collection.insertMany(recipes);
//   console.log(
//     `${insertManyResult.insertedCount} documents successfully inserted.\n`
//   );
// } catch (err) {
//   console.error(
//     `Something went wrong trying to insert the new documents: ${err}\n`
//   );
// }

// /*
//  * *** FIND DOCUMENTS ***
//  */

// const findQuery = { prepTimeInMinutes: { $lt: 45 } };

// try {
//   const cursor = await collection.find(findQuery).sort({ name: 1 });
//   await cursor.forEach((recipe) => {
//     console.log(
//       `${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`
//     );
//   });
//   // add a linebreak
//   console.log();
// } catch (err) {
//   console.error(
//     `Something went wrong trying to find the documents: ${err}\n`
//   );
// }

// // We can also find a single document. Let's find the first document
// // that has the string "potato" in the ingredients list.
// const findOneQuery = { ingredients: "potato" };

// try {
//   const findOneResult = await collection.findOne(findOneQuery);
//   if (findOneResult === null) {
//     console.log(
//       "Couldn't find any recipes that contain 'potato' as an ingredient.\n"
//     );
//   } else {
//     console.log(
//       `Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(
//         findOneResult
//       )}\n`
//     );
//   }
// } catch (err) {
//   console.error(`Something went wrong trying to find one document: ${err}\n`);
// }

// /*
//  * *** UPDATE A DOCUMENT ***
//  */
// const updateDoc = { $set: { prepTimeInMinutes: 72 } };

// const updateOptions = { returnOriginal: false };

// try {
//   const updateResult = await collection.findOneAndUpdate(
//     findOneQuery,
//     updateDoc,
//     updateOptions
//   );
//   console.log(
//     `Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`
//   );
// } catch (err) {
//   console.error(
//     `Something went wrong trying to update one document: ${err}\n`
//   );
// }

// /*
//  * *** DELETE DOCUMENTS ***
//  */

// const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
// try {
//   const deleteResult = await collection.deleteMany(deleteQuery);
//   console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
// } catch (err) {
//   console.error(`Something went wrong trying to delete documents: ${err}\n`);
// }

// // Make sure to call close() on your client to perform cleanup operations
// await client.close();
