import { DataTypes, InferAttributes, Model } from 'sequelize';

import sequelize from '../../../config/config';
import { Farm } from '../../farm/models/Farm';
import { User } from '../../user/models/User';

export interface FavoriteAttributes {
  userId: number;
  farmId: number;
}

/**
 * Favorite model
 * @class Favorite
 */
class Favorite extends Model<InferAttributes<Favorite>, FavoriteAttributes> {
  declare userId: number;
  declare farmId: number;
}

Favorite.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
  }
);

User.belongsToMany(Farm, {
  as: 'favorites',
  through: Favorite,
  foreignKey: 'userId',
  otherKey: 'farmId',
});

Farm.belongsToMany(User, {
  as: 'favorites',
  through: Favorite,
  foreignKey: 'farmId',
  otherKey: 'userId',
});

export default Favorite;
