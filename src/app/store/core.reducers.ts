import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import bookReducer from "./books/books.reducers";

export const reducers: ActionReducerMap<AppState> = {
    book: bookReducer
}