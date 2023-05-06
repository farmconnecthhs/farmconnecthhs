import {CreationOptional, DataTypes, InferAttributes, Model, Optional} from "sequelize";
import sequelize from "../../../config/config";
import {User} from "../../user/models/User";

interface RoleAttributes {
    id: number;
    farmer: boolean;
    admin: boolean;
    user: boolean;
}

export interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

export class Role extends Model<InferAttributes<Role>, RoleCreationAttributes> implements RoleAttributes {
    declare id: CreationOptional<number>;
    declare farmer: boolean;
    declare admin: boolean;
    declare user: boolean;
}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    farmer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
});

Role.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'})