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
  try {
    const businessHours: BusinessHours[] = await BusinessHoursService.getAll();
    if (!businessHours) {
      res
        .status(404)
        .json({ message: 'No business hours found for this farm' });
    }
    res.status(200).json(businessHours);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getBusinessHoursByFarmId = async (req: Request, res: Response) => {
  try {
    const businessHours = await BusinessHoursService.getByFarmId(
      Number(req.params.id)
    );
    if (!businessHours) {
      res
        .status(404)
        .json({ message: 'Business Hours not found for the given farmId' });
    }
    res.status(200).json(businessHours);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
