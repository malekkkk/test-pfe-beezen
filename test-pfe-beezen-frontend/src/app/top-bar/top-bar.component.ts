import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { AppComponent } from "../app.component";


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private bookService: BookService) { }

  get staticNomberOfSelectedBooks() {
    return BookService.nomberOfSelectedBooks;
  }
  get staticBooksAdded() {
    return BookService.shoppingCartBooks;
  }
  saveBooks() {
    this.bookService.saveBooks();
  }
  ngOnInit() {
  }
}
