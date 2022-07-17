import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { BookState } from "./book.state";

export const selectFeature = (state: AppState) => state.book;

export const getAllBooks = createSelector(
    selectFeature,
    (book: BookState) => book.books
);

export const getAllBooksCount = createSelector(
    selectFeature,
    (book: BookState) => book.books.length
);