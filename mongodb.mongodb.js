// create database
use("testdb");

// create a new collection (folder)
db.createCollection("books");

/*
    mongodb vs mysql
    db -> db
    collection -> table
    document -> row
    fields in document -> column
*/

// add one new data
// db.books.insertOne({
//   title: "Book 1",
//   description: "Very Interesting",
//   genre: "comedy",
// });

/*
    CRUD-
    Create, Read, Update, Delete
*/

// create
// insert multiple documents at one shot
// db.books.insertMany([
//   {
//     title: "Book 2",
//     description: "this is about book 2 - very scary",
//     genre: "horror",
//   },
//   {
//     title: "Book 3",
//     description: "this is about book 3",
//     genre: "sci-fi",
//   },
//   {
//     title: "Book 4",
//     description: "very funny",
//     genre: "comedy",
//   },
// ]);

// update
/*
    we want to change "Book 3" > "Book Three"
    1. find the books with title of "Book 3"
    2. update the books you found with the updated title ("Book Three")

    $set will create the value if not exist
    if exists, then it will update
*/
// db.books.updateOne(
//   {
//     title: "Book 3", // find the book with the title of "Book 3"
//   },
//   {
//     $set: {
//       title: "Book Three", // update the title to "Book Three"
//     },
//   }
// );

// update by ID (usually will use this)
// db.books.updateOne(
//   {
//     _id: ObjectId("68940cd5cfa150c16feca321"), // target by id
//   },
//   {
//     $set: { title: "Book Four" },
//   }
// );

// update multiple documents at one go
// db.books.updateMany(
//   {
//     genre: "comedy", // target all the books with genre comedy
//   },
//   {
//     $set: { rating: 4 }, // update or add a rating field
//   }
// );

// Delete
// delete by ID
// db.books.deleteOne({
//   _id: ObjectId("689405b1cd16b5832983208f"),
// });

// Read
/* 
    retrieve data
    filter data
*/
// db.books.find(); // retrieve all the books (same as SELECT * FROM books (mysql))

// filter by genre: "comedy" (.filter)
// db.books.find({ genre: "comedy" }); // will return as array of objects

// find one book with genre: "comedy" (.find)
// db.books.findOne({ genre: "comedy" }); // will return as object

// find all the books with rating more than 5
// db.books.find({
//   rating: { $gt: 5 }, // greater than
// });

// find all the books with rating less than 5
// db.books.find({
//   rating: { $lt: 5 }, // less than
// });

// find all the books with rating that is bigger than 5 but smaller than 6
// db.books.find({
//   rating: {
//     $gt: 3,
//     $lt: 6,
//   }, // in between 3 - 6
// });
