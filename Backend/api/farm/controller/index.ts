import { Request, Response } from 'express';

import { Farm } from '../../../db/modules/farm/models/Farm';
import * as FarmService from '../../../db/modules/farm/services/farmService';
import { CreateFarmDTO } from '../dto/farm.dto';

export const createFarm = async (req: Request, res: Response) => {
  const payload: CreateFarmDTO = req.body;
  if (!payload) {
    return res.status(400).json({ error: 'Bad Request: Invalid Farm Data' });
  }

  const farm: Farm = await FarmService.create(payload);
  if (!farm) {
    return res
      .status(400)
      .json({ error: 'Bad Request: Farm could not be created' });
  }

  return res.status(201).json(farm);
};

export const getAllFarms = async (req: Request, res: Response) => {
  const farms: Farm[] = await FarmService.getAll();
  if (farms.length === 0) {
    return res.status(404).json({ error: 'Not Found: No Farms' });
  }
  return res.status(200).json(farms);
};
