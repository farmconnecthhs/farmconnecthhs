import { Farm } from '../../../db/modules/farm/models/Farm';
import * as FarmService from '../../../db/modules/farm/services/farmService';
import { CreateFarmDTO } from '../dto/farm.dto';

export const create = async (payload: CreateFarmDTO): Promise<Farm> => {
  return await FarmService.create(payload);
};

export const getAll = async () => {
  return await FarmService.getAll();
};
