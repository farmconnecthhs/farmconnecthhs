import * as dal from '../dal/farmProfile.dal';
import {
  FarmProfile,
  FarmProfileCreationAttributes,
} from '../models/FarmProfile';

export const create = async (
  payload: FarmProfileCreationAttributes
): Promise<FarmProfile> => {
  const farmProfile = await dal.create(payload);
  if (!farmProfile) {
    throw new Error('FarmProfile not created');
  }
  return farmProfile;
};

export const getById = async (id: number): Promise<FarmProfile> => {
  const farmProfile = await dal.getById(id);
  if (!farmProfile) {
    throw new Error('FarmProfile not found');
  }
  return farmProfile;
};

export const getAll = async (): Promise<FarmProfile[]> => {
  const farmProfiles = await dal.getAll();
  if (!farmProfiles) {
    throw new Error('FarmProfiles not found');
  }
  return farmProfiles;
};
