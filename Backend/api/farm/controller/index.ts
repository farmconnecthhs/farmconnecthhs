import { Request, Response } from 'express';

import { Farm } from '../../../db/modules/farm/models/Farm';
import * as FarmService from '../../../db/modules/farm/services/farmService';
import { CreateFarmDTO } from '../dto/farm.dto';

export const createFarm = async (req: Request, res: Response) => {
  const payload: CreateFarmDTO = req.body;
  const farm: Farm = await FarmService.create(payload);
  return res.status(201).json(farm);
};

export const getAllFarms = async (req: Request, res: Response) => {
  const farms: Farm[] = await FarmService.getAll();
  return res.status(200).json(farms);
};
