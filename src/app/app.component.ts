import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { count, Subscription } from 'rxjs';
import { Book } from './interfaces/book';
import { AppState } from './store/app.state';
import BookActions from './store/books/books.actions';
import { getAllBooks, getAllBooksCount } from './store/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';
  
  public books: Book[] = [];

  public bookCount: number = 0;


  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    //Set all selectors here
    this.getAllBooks();
    this.getAllBooksCount();
  }

  getAllBooks() {
    const sub = this.store.select(getAllBooks).subscribe(
      books => {
        this.books = books;
    });
    //Add all subscriptions to the Subscriptions object
    this.subscriptions.add(sub);
  }

  getAllBooksCount() {
    const sub = this.store.select(getAllBooksCount).subscribe(
      count => {
        this.bookCount = count;
    });
    this.subscriptions.add(sub);
  }

  submit(book: Book) {
    this.store.dispatch(BookActions.AddBookAction({
      payload: book
    }));
  }

  ngOnDestroy() {
    //Unsubscribe all subscriptions onDestroy
    this.subscriptions.unsubscribe();
  }

}
