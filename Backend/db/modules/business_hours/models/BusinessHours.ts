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
  openTime: Date;
  closeTime: Date;
  profileFarmFarmId: number;
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
  declare openTime: Date;
  declare closeTime: Date;
  declare profileFarmFarmId: number;

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
    openTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    closeTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    profileFarmFarmId: {
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
  targetKey: 'id',
});
