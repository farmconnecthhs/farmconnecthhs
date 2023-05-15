import { Request, Response } from 'express';

import { Farm } from '../../../db/modules/farm/models/Farm';
import * as FarmService from '../../../db/modules/farm/services/farmService';
import { CreateFarmDTO } from '../dto/farm.dto';

export const create = async (req: Request, res: Response) => {
  try {
    const payload: CreateFarmDTO = req.body;
    const farm: Farm = await FarmService.create(payload);
    res.status(201).json(farm);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const farms: Farm[] = await FarmService.getAll();
    res.json(farms);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
