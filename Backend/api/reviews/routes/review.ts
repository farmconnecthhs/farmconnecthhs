import { Router } from 'express';

import * as ReviewController from '../controller/index';

const reviewRouter: Router = Router();

reviewRouter.get('/', ReviewController.getAll);

reviewRouter.get('/:id', ReviewController.getById);

reviewRouter.get('/user/:id', ReviewController.getByUserId);

reviewRouter.get('/farm/:id', ReviewController.getByFarmId);

reviewRouter.post('/', ReviewController.create);

export default reviewRouter;
