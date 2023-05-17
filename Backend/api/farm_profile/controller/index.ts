import { Request, Response } from 'express';

import { FarmProfile } from '../../../db/modules/farm_profile/models/FarmProfile';
import * as FarmProfileService from '../../../db/modules/farm_profile/services/farmProfileService';
import { CreateFarmProfileDTO } from '../dto/farmProfile.dto';

export const createFarmProfile = async (req: Request, res: Response) => {
  const payload: CreateFarmProfileDTO = req.body;
  if (!payload) {
    return res
      .status(400)
      .json({ error: 'Bad Request: Invalid Farm Profile Data' });
  }

  const farmProfile: FarmProfile = await FarmProfileService.create(payload);
  if (!farmProfile) {
    return res
      .status(400)
      .json({ error: 'Bad Request: Farm Profile could not be created' });
  }

  return res.status(201).json(farmProfile);
};

export const getAllFarmProfiles = async (req: Request, res: Response) => {
  const farmProfiles: FarmProfile[] = await FarmProfileService.getAll();
  if (farmProfiles.length === 0) {
    return res.status(404).json({ error: 'Not Found: No Farm Profiles' });
  }

  return res.status(200).json(farmProfiles);
};
