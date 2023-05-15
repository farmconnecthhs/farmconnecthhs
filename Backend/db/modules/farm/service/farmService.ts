import * as dal from '../dal/farm.dal';
import { Farm, FarmCreationAttributes } from '../models/Farm';

export const create = async (
  payload: FarmCreationAttributes
): Promise<Farm> => {
  const farm = await dal.create(payload);
  if (!farm) {
    throw new Error('Farm not created');
  }
  return farm;
};

export const getById = async (id: number) => {
  const farm = await dal.getById(id);
  if (!farm) {
    throw new Error('Farm not found');
  }
  return farm;
};

export const getAll = async () => {
  const farms = await dal.getAll();
  if (!farms) {
    throw new Error('Farms not found');
  }
  return farms;
};
