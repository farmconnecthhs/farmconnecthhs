import { FarmProfile } from '../../../db/modules/farm_profile/models/FarmProfile';
import * as FarmProfileService from '../../../db/modules/farm_profile/services/farmProfileService';
import { CreateFarmProfileDTO } from '../dto/farmProfile.dto';

export const create = async (
  payload: CreateFarmProfileDTO
): Promise<FarmProfile> => {
  return await FarmProfileService.create(payload);
};

export const getAll = async () => {
  return await FarmProfileService.getAll();
};
