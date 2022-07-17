import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, of, switchMap, tap } from "rxjs";
import BookActions from "./books.actions";

@Injectable({
    providedIn: 'root'
})
export class BookEffects {

    constructor(
        private actions$: Actions) {
    }

    //For debugging 
    init$ = createEffect(
        () => this.actions$.pipe(tap((action) => console.log(action))),
        { dispatch: false }
    );
    
    // addBook$ = createEffect(() =>
    // this.actions$.pipe(
    //     ofType(BookActions.AddBookAction), 
    //     tap(() => alert("Book added to library.")))
    // );

}