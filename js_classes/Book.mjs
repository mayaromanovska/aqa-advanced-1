/* Створіть клас "Книга" (Book) властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.*/

export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(title) {
    if (typeof title !== "string" || title.length < 2) {
      console.log("Incorect title");
      return;
    }
    this._title = title;
  }

  set author(author) {
    if (typeof author !== "string" || author.length < 2) {
      console.log("Incorect author");
      return;
    }
    this._author = author;
  }

  set year(year) {
    if (typeof year !== "number" || year <= 0 || year > 2023) {
      console.log("Incorect year");
      return;
    }
    this._year = year;
  }

  printInfo() {
    console.log(`Title: ${this._title}; Author: ${this._author}; Year: ${this._year};`);
  }

  static getOldestBook(books) {
    const oldestBook = books.reduce((book1, book2) => (book1.year < book2.year ? book1 : book2));
    return oldestBook;
  }
}
