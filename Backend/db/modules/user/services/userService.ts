import {User, UserCreationAttributes} from "../models/User";
import * as dal from "../dal/user";
import exp from "constants";
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