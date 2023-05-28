import { Request, Response } from 'express';

import { BusinessHours } from '../../../db/modules/business_hours/models/BusinessHours';
import * as BusinessHoursService from '../../../db/modules/business_hours/services/businessHoursService';
import { CreateBusinessHoursDTO } from '../dto/businessHours.dto';

export const createBusinessHours = async (req: Request, res: Response) => {
  const payload: CreateBusinessHoursDTO = req.body;
  const businessHours: BusinessHours = await BusinessHoursService.create(
    payload
  );
  return res.status(201).json(businessHours);
};

export const getAllBusinessHours = async (req: Request, res: Response) => {
  const businessHours: BusinessHours[] = await BusinessHoursService.getAll();
  return res.status(200).json(businessHours);
};
