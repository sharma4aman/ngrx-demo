import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  bookForm: UntypedFormGroup;

  @Output() onSubmit: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(
    private formBuilder: UntypedFormBuilder
    ) {
     //Initialize form here
     this.bookForm = this.formBuilder.group({
      id: [''],
      title: ['', {
        validators: [
          Validators.required, 
          Validators.maxLength(30)
          ]
        }
      ],
      description: ['', {
        validators: [
          Validators.required, 
          Validators.maxLength(100)
          ]
        }
      ]
    });
  }

  submit() {
    const bookObject = this.bookForm.getRawValue();
    this.onSubmit.emit(bookObject);
    this.bookForm.reset();
  }

  ngOnInit(): void {
  }

}
