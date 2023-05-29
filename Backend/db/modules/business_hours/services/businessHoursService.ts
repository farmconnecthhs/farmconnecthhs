import * as dal from '../dal/businessHours.dal';
import {
  BusinessHours,
  BusinessHoursCreationAttributes,
} from '../models/BusinessHours';

export const create = async (
  payload: BusinessHoursCreationAttributes
): Promise<BusinessHours> => {
  const businessHours = await dal.create(payload);
  if (!businessHours) {
    throw new Error('Business Hours not created');
  }
  return businessHours;
};

export const getAll = async () => {
  const businessHours = await dal.getAll();
  if (!businessHours) {
    throw new Error('Business Hours not found');
  }
  return businessHours;
};

export const getByFarmId = async (id: number) => {
  const businessHours = await dal.getByFarmId(id);
  if (!businessHours) {
    throw new Error('Business Hours not found for the given farmId');
  }
  return businessHours;
};
