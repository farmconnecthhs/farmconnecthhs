import { Request, Response } from 'express';

import { Review } from '../../../db/modules/review/models/Review';
import * as ReviewService from '../../../db/modules/review/services/reviewService';
import { CreateReviewDTO } from '../dto/review.dto';

export const create = async (payload: CreateReviewDTO): Promise<Review> => {
  return await ReviewService.create(payload);
};

export const getAll = async () => {
  return await ReviewService.getAll();
};

export const getById = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getById(Number(req.params.id));
    if (!review) {
      return res.status(404).json({ message: 'Review not found!' });
    }
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};

export const getByUserId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getByUserId(Number(req.params.id));
    if (!review) {
      return res.status(404).json({ message: 'Review not found!' });
    }
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};

export const getByFarmId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getByFarmId(Number(req.params.id));
    if (!review) {
      return res.status(404).json({ message: 'Review not found!' });
    }
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};
