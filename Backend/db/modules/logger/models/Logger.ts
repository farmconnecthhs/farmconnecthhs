import { DataTypes, Model, Optional } from 'sequelize';

import sequelize from '../../../config/config';
import { User } from '../../user/models/User';

interface LoggerAttributes {
  id: number;
  date: Date;
  service_name: string;
  level: string;
  message?: string;
  userId?: number;
}

export type LoggerCreationAttributes = Optional<LoggerAttributes, 'id'>;

export class Logger extends Model<LoggerAttributes, LoggerCreationAttributes> {
  public id!: number;
  public date!: Date;
  public service_name!: string;
  public level!: string;
  public message?: string;
  public userId?: number;
}

Logger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    service_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'loggers',
    timestamps: false,
  }
);

Logger.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
