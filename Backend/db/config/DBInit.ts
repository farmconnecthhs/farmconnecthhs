import { generateMockData } from '../mockdata/mockDataGenerator';
import { Farm } from '../modules/farm/models/Farm';
import { FarmProfile } from '../modules/farm_profile/models/FarmProfile';
import Favorite from '../modules/favorites/models/Favorite';
import { Logger } from '../modules/logger/models/Logger';
import { ProductCategory } from '../modules/product_category/models/ProductCategory';
import { ProductCategoryFarm } from '../modules/product_category-farm/models/ProductCategoryFarm';
import { Review } from '../modules/review/models/Review';
import { Role } from '../modules/role/models/Role';
import { User } from '../modules/user/models/User';

import sequelize from './config';

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev');
export const DBInit = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
    try {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      await sequelize.sync({ force: isDev });
      console.log('Database has been synced successfully.');
      await Favorite.sync({ force: isDev });
      await User.sync({ force: isDev });
      await Logger.sync({ force: isDev });
      await Farm.sync({ force: isDev });
      await Role.sync({ force: isDev });
      await Review.sync({ force: isDev });
      await FarmProfile.sync({ force: isDev });
      await ProductCategory.sync({ force: isDev });
      await ProductCategoryFarm.sync({ force: isDev });

      if (isDev) {
        await generateMockData();
      }
      console.log('Database has been synced successfully.');
    } catch (err) {
      console.error('Unable to sync database:', err);
    }
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

export default DBInit;
