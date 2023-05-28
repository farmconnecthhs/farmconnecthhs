import { FarmProfile } from '../../farm_profile/models/FarmProfile';
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
  return BusinessHours.findAll({
    include: [
      {
        model: FarmProfile,
        attributes: ['name'],
      },
    ],
  });
};
