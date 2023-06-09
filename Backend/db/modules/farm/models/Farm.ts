import {
  BelongsToManyAddAssociationMixin,
  CreationOptional,
  DataTypes,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  InferAttributes,
  Model,
  Optional,
} from 'sequelize';

import sequelize from '../../../config/config';
import { FarmProfile } from '../../farm_profile/models/FarmProfile';
import { ProductCategory } from '../../product_category/models/ProductCategory';
import { User } from '../../user/models/User';

interface FarmAttributes {
  id: number;
  name: string;
  email: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type FarmCreationAttributes = Optional<FarmAttributes, 'id'>;

/**
 * Model for Farm
 */
export class Farm
  extends Model<InferAttributes<Farm>, FarmCreationAttributes>
  implements FarmAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare phone?: string;

  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;

  public getFarmProfile!: HasOneGetAssociationMixin<FarmProfile>;
  public createFarmProfile!: HasOneCreateAssociationMixin<FarmProfile>;

  public addProductCategory!: BelongsToManyAddAssociationMixin<
    ProductCategory,
    number
  >;
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
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
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
User.belongsTo(Farm, { foreignKey: 'farmId', targetKey: 'id' });
