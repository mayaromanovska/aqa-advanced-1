/*В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Перевизначте метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo*/

import {Book} from "./Book.mjs";

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(fileFormat) {
    if (typeof fileFormat !== "string" || (fileFormat !== "pdf" && fileFormat !== "epub")) {
      console.log("Incorect file format");
      return;
    }
    this._fileFormat = fileFormat;
  }

  printInfo() {
    console.log(`Title: ${this._title}; Author: ${this._author}; Year: ${this._year}; Format: ${this._fileFormat};`);
  }

  static getEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
