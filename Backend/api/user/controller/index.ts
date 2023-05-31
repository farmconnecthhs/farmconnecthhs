import { Request, Response } from 'express';

import { User } from '../../../db/modules/user/models/User';
import * as UserService from '../../../db/modules/user/services/userService';
import { CreateUserDTO } from '../dto/user.dto';

export const create = async (payload: CreateUserDTO): Promise<User> => {
  return await UserService.create(payload);
};

export const getAll = async () => {
  return await UserService.getAll();
};

export const getById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getById(Number(req.params.id));
    if (!user) {
      res.status(404).json({ message: 'User not found!' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getByFirebaseId = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getByFirebaseId(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found!' });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getFavorites = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    const user = await UserService.getFavorites(Number(req.params.id));
    if (!user) {
      console.log('User not found!');
      res.status(404).json({ message: 'User not found!' });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
