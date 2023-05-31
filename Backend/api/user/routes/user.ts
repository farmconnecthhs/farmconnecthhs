import { Router } from 'express';

import * as UserController from '../controller/index';

const userRouter: Router = Router();
/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - Users
 *    description: Use to request all users
 *    responses:
 *      '200':
 *         description: A successful response
 *         content:
 *          application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                     $ref: '#/components/schemas/User'
 *      '400':
 *        description: Bad request
 *        content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Error'
 *
 */
userRouter.get('/', UserController.getAll);

userRouter.get('/:id', UserController.getById);

userRouter.get('/:id/favorites', UserController.getFavorites);

userRouter.get('/firebase/:id', UserController.getByFirebaseId);

userRouter.post('/', UserController.create);

export default userRouter;
