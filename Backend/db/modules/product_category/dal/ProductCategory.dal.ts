import { ProductCategory } from '../models/ProductCategory';

/**
 * Get all product categories
 * @return {Promise<ProductCategory[]>}
 */
export function getAll() {
  return ProductCategory.findAll();
}
