import {
  CreationOptional,
  DataTypes,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  InferAttributes,
  Model,
  Optional,
} from 'sequelize';

import sequelize from '../../../config/config';
import { FarmProfile } from '../../farm_profile/models/FarmProfile';

interface BusinessHoursAttributes {
  id: number;
  day: number;
  closed: boolean;
  openTime: Date;
  closeTime: Date;
  farmId: number;
}

export type BusinessHoursCreationAttributes = Optional<
  BusinessHoursAttributes,
  'id'
>;

export class BusinessHours
  extends Model<InferAttributes<BusinessHours>, BusinessHoursCreationAttributes>
  implements BusinessHoursAttributes
{
  declare id: CreationOptional<number>;
  declare day: number;
  declare closed: boolean;
  declare openTime: Date;
  declare closeTime: Date;
  declare farmId: number;

  public getProfileFarm!: BelongsToGetAssociationMixin<FarmProfile>;
  public setProfileFarm!: BelongsToSetAssociationMixin<
    FarmProfile,
    'profileFarmFarmId'
  >;
}

BusinessHours.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    closed: {
      type: DataTypes.BOOLEAN,
    },
    openTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    closeTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'business_hours',
    paranoid: true,
  }
);

BusinessHours.belongsTo(FarmProfile, {
  foreignKey: 'farmId',
});
FarmProfile.hasMany(BusinessHours, {
  foreignKey: 'farmId',
});
