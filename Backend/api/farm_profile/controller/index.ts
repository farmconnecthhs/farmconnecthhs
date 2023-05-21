import { Request, Response } from 'express';

import { FarmProfile } from '../../../db/modules/farm_profile/models/FarmProfile';
import * as FarmProfileService from '../../../db/modules/farm_profile/services/farmProfileService';
import { CreateFarmProfileDTO } from '../dto/farmProfile.dto';

export const createFarmProfile = async (req: Request, res: Response) => {
  const payload: CreateFarmProfileDTO = req.body;
  const farmProfile: FarmProfile = await FarmProfileService.create(payload);
  return res.status(201).json(farmProfile);
};

export const getAllFarmProfiles = async (req: Request, res: Response) => {
  const farmProfiles: FarmProfile[] = await FarmProfileService.getAll();
  return res.status(200).json(farmProfiles);
};

export const getFarmProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const farmProfile: FarmProfile = await FarmProfileService.getById(
      Number(id)
    );
    return res.status(200).json(farmProfile);
  } catch (error) {
    return res.status(404).json({ message: 'FarmProfile not found' });
  }
};
