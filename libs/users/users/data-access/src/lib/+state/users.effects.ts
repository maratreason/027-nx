import {inject} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {ApiService} from "@users/core/http";
import {switchMap, catchError, of, map} from "rxjs";
import {usersDTOAdapter} from "../users-dto.adapter";
import {UsersDTO} from "../users-dto.model";
import * as UsersActions from "./users.actions";

export const usersEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(UsersActions.initUsers),
      switchMap(() =>
        apiService.get<UsersDTO[]>("/users").pipe(
          map((users) => UsersActions.loadUsersSuccess({
            users: users.map(user => usersDTOAdapter.DTOtoEntity(user))
          })),
          catchError((error) => {
            console.error("Error", error);
            return of(UsersActions.loadUsersFailure({error}));
          })
        )
      )
    );
  },
  {functional: true}
);
