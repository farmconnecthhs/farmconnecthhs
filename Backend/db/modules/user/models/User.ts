import {CreationOptional, DataTypes, InferAttributes, Model, Optional} from "sequelize";
import sequelize from "../../../config/config";

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    token?: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<InferAttributes<User>, UserCreationAttributes> implements UserAttributes {
    //CreateOptional is a type that allows you to set the type of a property to undefined
    declare id: CreationOptional<number>;
    declare username: string;
    declare email: string;
    declare token?: CreationOptional<string>;
    declare avatar?: CreationOptional<string>;

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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
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