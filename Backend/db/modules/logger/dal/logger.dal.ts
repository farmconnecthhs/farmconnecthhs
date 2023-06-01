import { Logger, LoggerCreationAttributes } from '../models/Logger';

export const create = async (
  payload: LoggerCreationAttributes
): Promise<Logger> => {
  return await Logger.create(payload);
};

export const getAll = async () => {
  return await Logger.findAll();
};

export const getById = async (id: number) => {
  const logger = await Logger.findByPk(id);
  if (!logger) {
    return null;
  }
  return logger;
};

export const getByUserId = async (userId: number) => {
  return await Logger.findAll({ where: { userId: userId } });
};
