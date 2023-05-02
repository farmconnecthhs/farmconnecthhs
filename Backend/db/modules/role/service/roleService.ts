import { Role, RoleCreationAttributes } from '../models/Role';
import * as dal from '../dal/role.dal';


export const create = async (payload: RoleCreationAttributes): Promise<Role> => {
    const role = await Role.create(payload);
    if (!role) {
        throw new Error("Role not created");
    }
    return role;
}

export const getById = async (id: number) => {
    const role = await dal.getById(id);
    if (!role) {
        throw new Error("Role not found");
    }
    return role;
}

export const getAll = async () => {
    const roles = await dal.getAll();
    if (!roles) {
        throw new Error("Roles not found");
    }
    return roles;
}

export const deleteRoleById = async(id : number)=>{
    const role = await dal.getById(id);
    if (!role) {
        throw new Error("Role not found");
    }
    await dal.deleteRole(role);
}

