import { createAction, props } from '@ngrx/store';
import { Book } from '../../interfaces/book';

export enum BookActionType {
  ADD_ITEM = '[BOOK] Add Book',
}

const AddBookAction = createAction(
    BookActionType.ADD_ITEM,
    props<{ payload: Book }>()
);

const BookActions = {
    AddBookAction
}

export default BookActions;