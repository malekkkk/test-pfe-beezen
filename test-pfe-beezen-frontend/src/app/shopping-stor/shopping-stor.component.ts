import { Component, OnInit } from '@angular/core';
import { Book } from "../../models/book";
import { BookService } from "../../services/book.service";
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
  selector: 'app-shopping-stor',
  templateUrl: './shopping-stor.component.html',
  styleUrls: ['./shopping-stor.component.css']
})
export class ShoppingStorComponent implements OnInit{

  books: Book[] = [];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.bookService.GetBooks().subscribe((books: any[]) => {
      var listBooksResponse = new Array();
      for (var i = 0; i < books.length; ++i) {

        var bookk = new Book(
          books[i].isbn,
          books[i].title,
          books[i].price,
          books[i].cover,
          books[i].synopsis
        );

        listBooksResponse.push(bookk);
      }
      this.books = listBooksResponse;
    });
   
  }

  addBookToShoppingCart(book) {

    this.bookService.addBook(book);
    book.IsAdded = true;
    console.log(this.bookService.getSavedBooks());
    this.books.splice(
      this.books.indexOf(this.books.find(x => x.Isbn === book.Isbn)),
      1
    );

  }
}
