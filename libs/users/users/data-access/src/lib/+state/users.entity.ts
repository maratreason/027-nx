import {UsersDTO} from "../users-dto.model";

export type UsersEntity = Omit<UsersDTO, "created_at">;
