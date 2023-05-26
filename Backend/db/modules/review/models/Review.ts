import {
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  CreationOptional,
  DataTypes,
  InferAttributes,
  Model,
  Optional,
} from 'sequelize';

import sequelize from '../../../config/config';
import { Farm } from '../../farm/models/Farm';
import { User } from '../../user/models/User';

interface ReviewAttributes {
  id: number;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  farmId: number;
  userId: number;
}

export type ReviewCreationAttributes = Optional<ReviewAttributes, 'id'>;

export class Review
  extends Model<InferAttributes<Review>, ReviewCreationAttributes>
  implements ReviewAttributes
{
  declare id: CreationOptional<number>;
  declare description: string;
  declare rating: number;
  declare farmId: number;
  declare userId: number;

  public readonly createdAt!: CreationOptional<Date>;
  public readonly updatedAt!: CreationOptional<Date>;
  public readonly deletedAt!: CreationOptional<Date>;

  public getFarm!: BelongsToGetAssociationMixin<Farm>;
  public createFarm!: BelongsToSetAssociationMixin<Farm, 'farmId'>;

  public getUser!: BelongsToGetAssociationMixin<User>;
  public createUser!: BelongsToSetAssociationMixin<User, 'userId'>;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'reviews',
    timestamps: true,
    paranoid: true,
  }
);

Review.belongsTo(Farm, { foreignKey: 'farmId', as: 'farm' });
Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });
