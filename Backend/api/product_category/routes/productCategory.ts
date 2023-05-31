import { Router } from 'express';

import router from '../../routes';
import * as ProductCategoryController from '../controller/index';

const productCategoryRouter: Router = Router();

router.get('/', ProductCategoryController.getAllProductCategories);

export default productCategoryRouter;
