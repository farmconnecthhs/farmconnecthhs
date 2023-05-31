import { CreationOptional, DataTypes, InferAttributes, Model } from 'sequelize';

import sequelize from '../../../config/config';

export interface ProductCategoryAttributes {
  id?: number;
  type: string;
  deleted_at?: Date;
}

/**
 * Model for ProductCategory
 */
export class ProductCategory extends Model<
  InferAttributes<ProductCategory>,
  ProductCategoryAttributes
> {
  declare id: CreationOptional<number>;
  declare type: string;
  declare deleted_at?: CreationOptional<Date>;
}

ProductCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'product_category',
    timestamps: false,
    paranoid: true,
  }
);
