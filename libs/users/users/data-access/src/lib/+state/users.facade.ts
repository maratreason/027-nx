import {Injectable, inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {CreateUsersDTO} from "../users-dto.model";

import * as UsersActions from "./users.actions";
// import * as UsersFeature from "./users.reducer";
import * as UsersSelectors from "./users.selectors";

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);

  status$ = this.store.pipe(select(UsersSelectors.selectUsersStatus));
  allUsers$ = this.store.pipe(select(UsersSelectors.selectAllUsers));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.selectEntity));

  init() {
    this.store.dispatch(UsersActions.initUsers());
  }

  deleteUser(id: any) {
    this.store.dispatch(UsersActions.deleteUser({id}));
  }

  createUser(user: CreateUsersDTO) {
    this.store.dispatch(UsersActions.createUser({user}));
  }
}
