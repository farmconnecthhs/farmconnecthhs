import { Farm, FarmCreationAttributes } from '../models/Farm';

export const create = async (
  payload: FarmCreationAttributes
): Promise<Farm> => {
  return await Farm.create(payload);
};

export const getById = async (id: number) => {
  const farm = await Farm.findByPk(id);
  if (!farm) {
    return null;
  }
  return farm;
};

export const getAll = async () => {
  return await Farm.findAll();
};
