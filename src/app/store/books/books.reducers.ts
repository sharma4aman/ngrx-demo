import { createReducer, on } from "@ngrx/store";
import { BookState } from "./book.state";
import BookActions from "./books.actions";

export const initialState: BookState = {
    books: [{
      id: '1',
      title: 'Intro to Programing',
      description: 'C++ Programming'
    }]
};

const bookReducer = createReducer(
  initialState,
  on(BookActions.AddBookAction, ((state, action) => {
    return {
      ...state,
      books: [...state.books, action.payload]
    }
  }
  ))
);

export default bookReducer;
// export function reducer(state: BookState | undefined, action: Action): any {
//   return bookReducer(state, action);
// }