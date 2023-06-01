import { Request, Response } from 'express';

import * as ProductCategoryService from '../../../db/modules/product_category/service/productCategoryService';

/**
 * Get all product categories
 * @param{Request} req
 * @param{Response} res
 */
export const getAllProductCategories = async (req: Request, res: Response) => {
  const productCategories = await ProductCategoryService.getAll();
  res.json(productCategories);
};
