import { Router } from 'express';

import farmRouter from '../farm/routes/farm';
import farmProfileRouter from '../farm_profile/routes/farmProfile';
import userRouter from '../user/routes/user';

const router = Router();

router.use('/users', userRouter);
router.use('/farms', farmRouter);
router.use('/farmProfiles', farmProfileRouter);
export default router;
