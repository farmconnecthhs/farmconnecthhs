import {User, UserCreationAttributes} from "../models/User";
import * as dal from "../dal/user";

export const create = async (payload: UserCreationAttributes): Promise<User> => {
    return await dal.create(payload);
}

export const getById = async (id: number) => {
    const user = await dal.getById(id);
    if (!user) {
        return null;
    }
    return user;
}

export const getAll = async () => {
    return  await dal.getAll();
}

export const deleteById = async (id: number) => {
    const user = await dal.getById(id);
    if (!user) {
        return null;
    }
    await user.destroy();
}

export const setRoleForUser = async (userId: number, roleParams: {admin: boolean, user:boolean, farmer:boolean}) => {
    const user = await dal.getById(userId);
    if (!user) {
        return null;
    }
    const role = await user.getRole();
    await user.setRole(roleParams);
}

export const getRoleForUser = async (userId: number) => {
    const user = await dal.getById(userId);
    if (!user) {
        return null;
    }
    return await user.getRole();
}