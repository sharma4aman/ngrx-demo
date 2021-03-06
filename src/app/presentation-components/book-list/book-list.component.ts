import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
