import { Router } from 'express';

import businessHoursRouter from '../business_hours/routes/businessHours';
import farmRouter from '../farm/routes/farm';
import farmProfileRouter from '../farm_profile/routes/farmProfile';
import productCategoryRouter from '../product_category/routes/productCategory';
import loggerRouter from '../logger/routes/logger';
import reviewRouter from '../reviews/routes/review';
import userRouter from '../user/routes/user';

const router = Router();

router.use('/users', userRouter);
router.use('/logs', loggerRouter);
router.use('/farms', farmRouter);
router.use('/farmProfiles', farmProfileRouter);
router.use('/businessHours', businessHoursRouter);
router.use('/reviews', reviewRouter);
router.use('/productCategories', productCategoryRouter);
export default router;
