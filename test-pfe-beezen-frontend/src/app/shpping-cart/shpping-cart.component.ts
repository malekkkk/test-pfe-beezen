import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book";
import { ActivatedRoute } from "@angular/router"
import { Discount } from '../../models/discount';


@Component({

  selector: 'app-shpping-cart',
  templateUrl: './shpping-cart.component.html',
  styleUrls: ['./shpping-cart.component.css']

})
export class ShppingCartComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public addedBooks: Book[] = [];
  public discounts: Discount[];
  public totalPrice: number = 0;
  public discountedTotalPrice: number = 0;
  books: Book[] = BookService.shoppingCartBooks;

  ngOnInit() {
    this.addedBooks = this.bookService.getSavedBooks();
    var nbrOfSelectedBooks = this.addedBooks.length;
    for (let book of this.addedBooks) {
      this.totalPrice += book.Price;
    }
    this.discountedTotalPrice = this.totalPrice;
    BookService.nomberOfSelectedBooks = nbrOfSelectedBooks;
    if (nbrOfSelectedBooks > 0) {
      this.bookService.GetDiscount(this.addedBooks.length).subscribe((discounts: any[]) => {
        console.log(discounts);
        for (let discount of discounts) {

          switch (discount.type) {
            case "percentage":
              {
                var x = this.totalPrice * (1 - (discounts[0].value * 0.01));
                if (x < this.discountedTotalPrice)
                  this.discountedTotalPrice = x;
               
              }
            case "minus":
              {
                var x = this.totalPrice - discount.value;
                if (x < this.discountedTotalPrice)
                  this.discountedTotalPrice = x;
              }
            case "slice":
              {
                var x = this.totalPrice - (this.totalPrice / discount.sliceValue) * discount.value;
                console.log(x);
                if (x < this.discountedTotalPrice)
                this.discountedTotalPrice = x;
              }
          }
        }
      });
    }
  }
}
