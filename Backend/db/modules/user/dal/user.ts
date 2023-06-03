import { Farm } from '../../farm/models/Farm';
import { FarmProfile } from '../../farm_profile/models/FarmProfile';
import { User, UserCreationAttributes } from '../models/User';

export const create = async (
  payload: UserCreationAttributes
): Promise<User> => {
  return await User.create(payload);
};

export const getFavorites = async (id: number) => {
  const user = await User.findOne({
    where: { firebaseId: id },
    include: [
      {
        model: Farm,
        as: 'favorites',
        include: [{ model: FarmProfile, attributes: ['address', 'city'] }],
      },
    ],
  });
  console.log(user);
  if (!user) {
    console.log('User not found!');
    return null;
  }
  console.log(user.favorites);
  return user.favorites;
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
