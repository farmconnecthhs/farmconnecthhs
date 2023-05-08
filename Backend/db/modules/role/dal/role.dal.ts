import { Role, RoleCreationAttributes } from '../models/Role';

export const create = async (
  payload: RoleCreationAttributes
): Promise<Role> => {
  return await Role.create(payload);
};

export const getById = async (id: number) => {
  const role = await Role.findByPk(id);
  if (!role) {
    return null;
  }
  return role;
};

export const getAll = async () => {
  return await Role.findAll();
};
