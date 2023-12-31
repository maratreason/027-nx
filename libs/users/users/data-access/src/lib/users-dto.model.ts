import {DeepReadonly} from "@users/core/utils";

export type UsersDTO = DeepReadonly<{
  id: number;
  name: string;
  email: string;
  username: string;
  city: string;
  created_at?: number;
}>

export type CreateUsersDTO = DeepReadonly<{
  id?: number;
  name: string;
  email: string;
  username?: string;
  city?: string;
  created_at?: number;
}>
