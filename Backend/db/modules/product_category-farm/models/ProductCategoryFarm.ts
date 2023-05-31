import { CreationOptional, DataTypes, InferAttributes, Model } from 'sequelize';

import sequelize from '../../../config/config';
import { Farm } from '../../farm/models/Farm';
import { ProductCategory } from '../../product_category/models/ProductCategory';

export interface ProductCategoryFarmAttributes {
  farmId?: number;
  productCategoryId?: number;
}

/**
 * Model for ProductCategoryFarm
 */
export class ProductCategoryFarm extends Model<
  InferAttributes<ProductCategoryFarm>,
  ProductCategoryFarmAttributes
> {
  declare farmId: CreationOptional<number>;
  declare productCategoryId: CreationOptional<number>;
}

ProductCategoryFarm.init(
  {
    farmId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productCategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: 'product_category_farm',
  }
);

ProductCategory.belongsToMany(Farm, {
  through: ProductCategoryFarm,
  foreignKey: 'productCategoryId',
  otherKey: 'farmId',
});

Farm.belongsToMany(ProductCategory, {
  through: ProductCategoryFarm,
  foreignKey: 'farmId',
  otherKey: 'productCategoryId',
});
