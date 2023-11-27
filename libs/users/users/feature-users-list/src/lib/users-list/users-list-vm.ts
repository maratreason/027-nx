import {UsersStatus} from "@users/users/data-access";
import {UsersVM} from "../users-vm";

export type UsersListVM = {
  users: UsersVM[];
  status: UsersStatus;
};


