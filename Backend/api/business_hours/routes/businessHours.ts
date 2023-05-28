import { Router } from 'express';

import * as BusinessHoursController from '../controller/index';

const businessHoursRouter: Router = Router();

businessHoursRouter.get(' /', BusinessHoursController.getAllBusinessHours);

businessHoursRouter.post('/', BusinessHoursController.createBusinessHours);

export default businessHoursRouter;
