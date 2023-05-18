import { Request, Response } from 'express';

import { Farm } from '../../../db/modules/farm/models/Farm';
import * as FarmService from '../../../db/modules/farm/services/farmService';

export const getAllFarms = async (req: Request, res: Response) => {
  const farms: Farm[] = await FarmService.getAll();
  return res.status(200).json(farms);
};
