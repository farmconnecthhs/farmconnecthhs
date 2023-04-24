import {CreationOptional, DataTypes, InferAttributes, Model, Optional} from "sequelize";
import sequelize from "../../../config/config";

interface UserAttributes {
    id: number;
    first_name?: string;
    last_name?: string;
    user_name: string;
    email_address: string;
    phone_number?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<InferAttributes<User>, UserCreationAttributes> implements UserAttributes {
    //CreateOptional is a type that allows you to set the type of a property to undefined
    declare id: CreationOptional<number>;
    declare first_name?: string;
    declare last_name?: string;
    declare user_name: string;
    declare email_address: string;
    declare phone_number?: string;

    // timestamps!
    // timestamps are optional, so we need to use CreationOptional
    // these get added to the model when you call init
    public readonly createdAt!: CreationOptional<Date>;
    public readonly updatedAt!: CreationOptional<Date>;
    public readonly deletedAt!: CreationOptional<Date>;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
}, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    paranoid: true
    }
);