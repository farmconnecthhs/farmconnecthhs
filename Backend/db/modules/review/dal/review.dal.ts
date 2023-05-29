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

export const getByUserId = async (id: number) => {
  const review = await Review.findAll({ where: { userId: id } });
  if (!review) {
    return null;
  }
  return review;
};

export const getByFarmId = async (id: number) => {
  const review = await Review.findAll({ where: { profileFarmFarmId: id } });
  if (!review) {
    return null;
  }
  return review;
};
