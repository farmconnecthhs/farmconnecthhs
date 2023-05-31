import * as dal from '../dal/ProductCategory.dal';

/**
 * Get all product categories
 * @return {Promise<ProductCategory[]>}
 */
export function getAll() {
  const productCategories = dal.getAll();
  if (!productCategories) {
    throw new Error('No product categories found');
  }
  return productCategories;
}
