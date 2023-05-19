import {
  CreationOptional,
  DataTypes,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  InferAttributes,
  Model,
  Optional,
} from 'sequelize';

import sequelize from '../../../config/config';
import { Role } from '../../role/models/Role';

interface UserAttributes {
  id: number;
  first_name?: string;
  last_name?: string;
  user_name: string;
  firebaseId: string;
  email_address: string;
  phone_number?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  roleId?: number;
  farmId?: number;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

/**
 * Model for the User table
 */
export class User extends Model<InferAttributes<User>, UserCreationAttributes> {
  // CreateOptional is a type that allows you to set the type of a property to undefined
  declare id: CreationOptional<number>;
  declare first_name?: string;
  declare last_name?: string;
  declare user_name: string;
  declare firebaseId: string;
  declare email_address: string;
  declare phone_number?: string;
  declare roleId?: CreationOptional<number>;
  declare farmId?: CreationOptional<number>;

  public getRole!: HasOneGetAssociationMixin<Role>;
  public setRole!: HasOneCreateAssociationMixin<Role>;

  // timestamps!
  // timestamps are optional, so we need to use CreationOptional
  // these get added to the model when you call init
  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;
}

User.init(
  {
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
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    firebaseId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
  }
);
