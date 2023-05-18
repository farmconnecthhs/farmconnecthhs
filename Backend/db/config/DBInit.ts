import { generateMockData } from '../mockdata/mockDataGenerator';
import { Farm } from '../modules/farm/models/Farm';
import { Role } from '../modules/role/models/Role';
import { User } from '../modules/user/models/User';

import sequelize from './config';

const isDev = process.env.NODE_ENV === 'development';
export const DBInit = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
    try {
      if (process.env.NODE_ENV === 'development') {
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        await sequelize.sync({ force: isDev });
        console.log('Database has been synced successfully.');
        await User.sync({ force: isDev });
        await Role.sync({ force: isDev });
        await Farm.sync({ force: isDev });

        if (isDev) {
          await generateMockData();
        }
        console.log('Database has been synced successfully.');
      }
    } catch (err) {
      console.error('Unable to sync database:', err);
    }
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

export default DBInit;
