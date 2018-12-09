export class Book {
  public Isbn: string;
  public Title: string;
  public Price: number;
  public Cover: string;
  public Synopsis: string;
  public IsAdded: boolean;
  constructor(isbn: string, title: string, price: number, cover: string, synopsis: string ) {

    this.Isbn = isbn;
    this.Title = title;
    this.Price = price;
    this.Cover = cover;
    this.Synopsis = synopsis;
    this.IsAdded = false;
  }
}
