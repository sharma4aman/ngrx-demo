import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Book } from './interfaces/book';
import BookActions from './store/books/books.actions';
import { getAllBooks } from './store/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';
  
  public books: Book[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    const sub =this.store.select(getAllBooks).subscribe(
      books => { this.books = books }
    )
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
