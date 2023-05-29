import {
  BusinessHours,
  BusinessHoursCreationAttributes,
} from '../models/BusinessHours';

export const create = async (
  payload: BusinessHoursCreationAttributes
): Promise<BusinessHours> => {
  return await BusinessHours.create(payload);
};

export const getById = async (id: number): Promise<BusinessHours | null> => {
  const businessHours = await BusinessHours.findByPk(id);
  if (!businessHours) {
    return null;
  }
  return businessHours;
};

export const getAll = async (): Promise<BusinessHours[]> => {
  return BusinessHours.findAll();
};

export const getByFarmId = async (id: number) => {
  const businessHours = await BusinessHours.findAll({
    where: { profileFarmFarmId: id },
  });
  if (!businessHours) {
    return null;
  }
  return businessHours;
};
