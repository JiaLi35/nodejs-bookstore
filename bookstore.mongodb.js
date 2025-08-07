// create database
use("bookstore");
// new collection
db.createCollection("books");

// add books into books collection
db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published: "1925",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published: "1960",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    published: "1988",
  },
]);

// query the collection
db.books.find({ author: "F. Scott Fitzgerald" });
db.books.find({ genre: "Science" });

// updating books
db.books.updateOne(
  {
    title: "The Great Gatsby",
  },
  {
    $set: { value: "$10" },
  }
);

db.books.updateOne(
  {
    _id: ObjectId("689419a75d792c20b5c65761"),
  },
  {
    $set: { published: "1987" },
  }
);

// delete books
db.books.deleteOne({
  _id: ObjectId("689419a75d792c20b5c65760"),
});
