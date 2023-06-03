import { BusinessHours } from '../../business_hours/models/BusinessHours';
import { Farm } from '../../farm/models/Farm';
import { ProductCategory } from '../../product_category/models/ProductCategory';
import {
  FarmProfile,
  FarmProfileCreationAttributes,
} from '../models/FarmProfile';

export const create = async (
  payload: FarmProfileCreationAttributes
): Promise<FarmProfile> => {
  return await FarmProfile.create(payload);
};

export const getById = async (id: number): Promise<FarmProfile | null> => {
  return await FarmProfile.findByPk(id, {
    include: [
      {
        model: BusinessHours,
      },
    ],
  });
};

export const getAll = async (): Promise<FarmProfile[]> => {
  return await FarmProfile.findAll({
    include: [
      {
        model: Farm,
        attributes: ['name'],
        include: [
          {
            model: ProductCategory,
          },
        ],
      },
      {
        model: BusinessHours,
      },
    ],
  });
};
