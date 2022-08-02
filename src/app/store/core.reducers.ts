import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import bookReducer from "./books/books.reducers";

export const coreReducers: ActionReducerMap<AppState> = {
    book: bookReducer
    // course: courseReducer
}