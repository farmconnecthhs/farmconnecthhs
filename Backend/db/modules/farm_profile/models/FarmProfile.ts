import {
  CreationOptional,
  DataTypes,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  InferAttributes,
  Model,
} from 'sequelize';

import sequelize from '../../../config/config';
import { Farm } from '../../farm/models/Farm';

interface FarmProfileAttributes {
  thumbnail?: Buffer;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  latitude?: number;
  longitude?: number;
  farmDescription?: string;
  productDescription?: string;
  email?: string;
  website?: string;
  phone?: string;
  cashPayment: boolean;
  cardPayment: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  farmId: number;
}

export type FarmProfileCreationAttributes = FarmProfileAttributes;

export class FarmProfile
  extends Model<InferAttributes<FarmProfile>, FarmProfileCreationAttributes>
  implements FarmProfileAttributes
{
  declare thumbnail?: Buffer;
  declare streetName: string;
  declare houseNumber: string;
  declare postalCode: string;
  declare city: string;
  declare latitude?: number;
  declare longitude?: number;
  declare farmDescription?: string;
  declare productDescription?: string;
  declare email?: string;
  declare website?: string;
  declare phone?: string;
  declare cashPayment: boolean;
  declare cardPayment: boolean;
  declare farmId: number;

  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;

  public getFarm!: BelongsToGetAssociationMixin<Farm>;
  public setFarm!: BelongsToSetAssociationMixin<Farm, 'farmId'>;
}

FarmProfile.init(
  {
    thumbnail: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true,
    },
    farmDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cashPayment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cardPayment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'farm_profiles',
    timestamps: true,
    paranoid: true,
  }
);

FarmProfile.belongsTo(Farm, { foreignKey: 'farmId', targetKey: 'id' });
