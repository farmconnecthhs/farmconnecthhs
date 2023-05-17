import { Request, Response } from 'express';

import { FarmProfile } from '../../../db/modules/farm_profile/models/FarmProfile';
import * as FarmProfileService from '../../../db/modules/farm_profile/services/farmProfileService';
import { CreateFarmProfileDTO } from '../dto/farmProfile.dto';

export const create = async (req: Request, res: Response) => {
  try {
    const payload: CreateFarmProfileDTO = req.body;
    const farmProfile: FarmProfile = await FarmProfileService.create(payload);
    res.status(201).json(farmProfile);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const farmProfiles: FarmProfile[] = await FarmProfileService.getAll();
    res.status(200).json(farmProfiles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
