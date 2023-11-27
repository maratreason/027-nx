import {provideHttpClient} from "@angular/common/http";
import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {API_URL} from "@users/core/http";
import {provideStore, provideState} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {
  USERS_FEATURE_KEY,
  usersReducer,
  UsersFacade,
  usersEffects,
} from "@users/users/data-access";
import {appRoutes} from "./app.routes";
import {environment} from "../environments/environment.development";
import {provideNoopAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    UsersFacade,
    provideEffects(usersEffects),
    provideState(USERS_FEATURE_KEY, usersReducer),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    provideNoopAnimations(),
  ],
};
