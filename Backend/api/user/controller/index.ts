import * as UserService from '../../../db/modules/user/services/userService';
import {CreateUserDTO} from "../dto/user.dto";
import {User} from "../../../db/modules/user/models/User";

export const create = async (payload: CreateUserDTO): Promise<User> => {
    return await UserService.create(payload);
}
export const getAll = async () => {
    return await UserService.getAll();
}