import { Router } from 'express';

import * as LoggerController from '../controller/index';

const loggerRouter: Router = Router();

loggerRouter.post('/', LoggerController.create);

loggerRouter.get('/', LoggerController.getAll);

loggerRouter.get('/:id', LoggerController.getById);

loggerRouter.get('/user/:userId', LoggerController.getByUserId);

export default loggerRouter;
