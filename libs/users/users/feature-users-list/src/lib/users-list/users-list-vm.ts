import {DeepReadonly} from "@users/core/utils";
import {UsersStatus} from "@users/users/data-access";
import {UsersVM} from "../users-vm";

export type UsersListVM = DeepReadonly<{
  users: UsersVM[];
  status: UsersStatus;
}>;



