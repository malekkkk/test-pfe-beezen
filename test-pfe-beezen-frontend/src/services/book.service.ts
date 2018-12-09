import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Book } from "../models/book";
import { Discount } from "../models/discount";

import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class BookService {
  
  constructor(private http: Http, protected localStorage: LocalStorage) { }
  static nomberOfSelectedBooks = 0;
  static shoppingCartBooks: Book[] = [];
  public GetBooks() {
    return this.http
      .get("http://localhost:3000/getBooksStor")
      .pipe(map(res => res.json()));
  }
  public GetDiscount(nbr: number) {
    return this.http
      .get(`http://localhost:3000/getBooksStor/${nbr} `)
      .pipe(map(res => res.json()));
  }

  public saveBooks() {
    localStorage.setItem("books", JSON.stringify(BookService.shoppingCartBooks));
  }
  public addBook(book: Book) {
    BookService.nomberOfSelectedBooks++;
    BookService.shoppingCartBooks.push(book);
    this.saveBooks();
  }
  public getSavedBooks() {
    var retrievedData = localStorage.getItem("books");
    var savedBooks: Book[] = JSON.parse(retrievedData);
    return savedBooks;

  }

}
