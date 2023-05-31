import { User, UserCreationAttributes } from '../models/User';

export const create = async (
  payload: UserCreationAttributes
): Promise<User> => {
  return await User.create(payload);
};

export const getFavorites = async (id: number) => {
  const user = await User.findOne({
    where: { id: id },
  });
  if (!user) {
    return null;
  }
  return user.getFavorites();
};

export const getAll = async () => {
  return await User.findAll();
};

export const getById = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  return user;
};

export const getByFirebaseId = async (firebaseId: string) => {
  const user = await User.findOne({ where: { firebaseId } });
  if (!user) {
    return null;
  }
  return user;
};
