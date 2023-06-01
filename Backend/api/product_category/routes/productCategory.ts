import { Router } from 'express';

import * as ProductCategoryController from '../controller/index';

const productCategoryRouter: Router = Router();

productCategoryRouter.get(
  '/',
  ProductCategoryController.getAllProductCategories
);

export default productCategoryRouter;
