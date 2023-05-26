import { Review, ReviewCreationAttributes } from '../models/Review';

export const create = async (
  payload: ReviewCreationAttributes
): Promise<Review> => {
  return await Review.create(payload);
};

export const getById = async (id: number) => {
  const review = await Review.findByPk(id);
  if (!review) {
    return null;
  }
  return review;
};

export const getAll = async () => {
  return await Review.findAll();
};
