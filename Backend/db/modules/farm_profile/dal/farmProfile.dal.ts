import {
  FarmProfile,
  FarmProfileCreationAttributes,
} from '../models/FarmProfile';

export const create = async (
  payload: FarmProfileCreationAttributes
): Promise<FarmProfile> => {
  return await FarmProfile.create(payload);
};

export const getById = async (id: number): Promise<FarmProfile | null> => {
  const farmProfile = await FarmProfile.findByPk(id);
  if (!farmProfile) {
    return null;
  }
  return farmProfile;
};

export const getAll = async (): Promise<FarmProfile[]> => {
  return await FarmProfile.findAll();
};
