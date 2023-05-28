import { Router } from 'express';

// eslint-disable-next-line import/default
import businessHoursRouter from '../business_hours/routes/businessHours';
import farmRouter from '../farm/routes/farm';
import farmProfileRouter from '../farm_profile/routes/farmProfile';
import userRouter from '../user/routes/user';

const router = Router();

router.use('/users', userRouter);
router.use('/farms', farmRouter);
router.use('/farmProfiles', farmProfileRouter);
router.use('/businessHours', businessHoursRouter);
export default router;
