import { Role } from '../modules/role/models/Role';
import { User } from '../modules/user/models/User';

import sequelize from './config';

export const DBInit = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
    try {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      await sequelize.sync();
      console.log('Database has been synced successfully.');
      await User.sync();
      await Role.sync();
      console.log('Database has been synced successfully.');
    } catch (err) {
      console.error('Unable to sync database:', err);
    }
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

export default DBInit;
