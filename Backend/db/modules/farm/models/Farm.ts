import {
  CreationOptional,
  DataTypes,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  InferAttributes,
  Model,
  Optional,
} from 'sequelize';

import sequelize from '../../../config/config';
import { FarmProductCategory } from '../../farm_product_category/models/FarmProductCategory';

interface FarmAttributes {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type FarmCreationAttributes = Optional<FarmAttributes, 'id'>;

export class Farm
  extends Model<InferAttributes<Farm>, FarmCreationAttributes>
  implements FarmAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare phone: string;

  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;

  public createFarmProductCategory!: HasManyCreateAssociationMixin<FarmProductCategory>;
  public getFarmProductCategories!: HasManyGetAssociationsMixin<FarmProductCategory>;
}

Farm.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'farms',
    timestamps: true,
    paranoid: true,
  }
);

Farm.hasMany(FarmProductCategory, { foreignKey: 'farmId' });
