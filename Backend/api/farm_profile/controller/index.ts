import { Request, Response } from 'express';

import { FarmProfile } from '../../../db/modules/farm_profile/models/FarmProfile';
import * as FarmProfileService from '../../../db/modules/farm_profile/services/farmProfileService';

export const getAllFarmProfiles = async (req: Request, res: Response) => {
  const farmProfiles: FarmProfile[] = await FarmProfileService.getAll();
  return res.status(200).json(farmProfiles);
};
