import * as dal from '../dal/logger.dal';
import { Logger, LoggerCreationAttributes } from '../models/Logger';

/**
 * Create a new logger
 * @param payload
 */
export const create = async (
  payload: LoggerCreationAttributes
): Promise<Logger> => {
  return await dal.create(payload);
};


export const getAll = async () => {
  return await dal.getAll();
};

export const getById = async (id: number) => {
  const logger = await dal.getById(id);
  if (!logger) {
    return null;
  }
  return logger;
};

export const getByUserId = async (userId: number) => {
  return await dal.getByUserId(userId);
};
