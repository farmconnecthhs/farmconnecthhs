import * as dal from '../dal/review.dal';
import { Review, ReviewCreationAttributes } from '../models/Review';

export const create = async (
  payload: ReviewCreationAttributes
): Promise<Review> => {
  const review = await dal.create(payload);
  if (!review) {
    throw new Error('Review not created');
  }
  return review;
};

export const getById = async (id: number) => {
  try {
    const review = await dal.getById(id);
    if (!review) {
      new Error('Review not found');
    }
    return review;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export const getAll = async () => {
  const reviews = await dal.getAll();
  if (!reviews) {
    throw new Error('Reviews not found');
  }
  return reviews;
};

export const getByUserId = async (id: number) => {
  const review = await dal.getByUserId(id);
  if (!review) {
    throw new Error('Review not found');
  }
  return review;
};

export const getByFarmId = async (id: number) => {
  const review = await dal.getByFarmId(id);
  if (!review) {
    throw new Error('Review not found');
  }
  return review;
};
