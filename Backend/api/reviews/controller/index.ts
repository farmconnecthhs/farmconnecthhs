import { Request, Response } from 'express';

import { Review } from '../../../db/modules/review/models/Review';
import * as ReviewService from '../../../db/modules/review/services/reviewService';
import { CreateReviewDTO } from '../dto/review.dto';

export const create = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const payload: CreateReviewDTO = req.body;
    const review: Review = await ReviewService.create(payload);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getAll();
    if (!reviews) {
      res.status(404).json({ message: 'Reviews not found!' });
    }
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
export const getById = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getById(Number(req.params.id));
    if (!review) {
      res.status(404).json({ message: 'Review not found!' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getByUserId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getByUserId(Number(req.params.id));
    if (!review) {
      res.status(404).json({ message: 'Review not found!' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getByFarmId = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getByFarmId(Number(req.params.id));
    if (!review) {
      res.status(404).json({ message: 'Review not found!' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
