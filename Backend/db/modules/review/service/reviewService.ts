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
  const review = await dal.getById(id);
  if (!review) {
    throw new Error('Review not found');
  }
  return review;
};

export const getAll = async () => {
  const reviews = await dal.getAll();
  if (!reviews) {
    throw new Error('Reviews not found');
  }
  return reviews;
};
