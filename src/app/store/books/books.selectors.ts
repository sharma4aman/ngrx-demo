import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { BookState } from "./book.state";

export const selectFeature = (state: AppState) => state.book;

export const getAllBooks = createSelector(
    selectFeature,
    (state: BookState) => state.books
);