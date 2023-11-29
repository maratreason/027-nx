import {UsersEntity} from "./+state/users.entity";
import {CreateUsersDTO, UsersDTO} from "./users-dto.model";

type UsersDTOAdapter = {
  DTOtoEntity(dto: UsersDTO): UsersEntity;
  entityToDTO(entity: UsersEntity): CreateUsersDTO;
};

export const usersDTOAdapter: UsersDTOAdapter = {
  DTOtoEntity(dto) {
    const {created_at, ...otherAddressFields} = dto;

    return {
      ...otherAddressFields,
    };
  },
  entityToDTO(entity) {
    return {
      ...entity,
    };
  },
};
