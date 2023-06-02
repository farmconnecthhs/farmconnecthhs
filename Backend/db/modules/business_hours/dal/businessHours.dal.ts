import {
  BusinessHours,
  BusinessHoursCreationAttributes,
} from '../models/BusinessHours';

export const create = async (
  payload: BusinessHoursCreationAttributes
): Promise<BusinessHours> => {
  return await BusinessHours.create(payload);
};

export const getAll = async (): Promise<BusinessHours[]> => {
  return BusinessHours.findAll();
};

export const getByFarmId = async (id: number) => {
  const businessHours = await BusinessHours.findAll({
    where: { farmId: id },
  });
  if (!businessHours) {
    return null;
  }
  return businessHours;
};
