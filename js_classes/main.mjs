import {Book} from "./Book.mjs";
import {EBook} from "./EBook.mjs";

const book1 = new Book("title1", "author1", 2001);
book1.printInfo();
const book2 = new Book("title2", "author2", 2002);
book2.printInfo();

//get
console.log("Current title: " + book1.title);
//set
book1.title = "title11";
console.log("New title: " + book1.title);

//set incorrect values
book1.title = 1;
book1.title = "Q";
book1.author = 1;
book1.author = "Q";
book1.year = "2023";
book1.year = 0;
book1.year = 2024;

const ebook1 = new EBook("title3", "author3", 2003, "pdf");
ebook1.printInfo();

//get
console.log(`Current format: ${ebook1.fileFormat}`);
//set
ebook1.fileFormat = "epub";
console.log(`Current format: ${ebook1.fileFormat}`);

//set incorrect values
ebook1.fileFormat = 1;
ebook1.fileFormat = "doc";

const arrayBooks = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(arrayBooks);
console.log("Oldest book is: ");
oldestBook.printInfo();
console.log("Ebook from Book is: ");
console.log(EBook.getEBookFromBook(book1, "epub"));
