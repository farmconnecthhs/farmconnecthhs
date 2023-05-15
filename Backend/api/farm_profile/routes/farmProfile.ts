import { Router } from 'express';

import * as FarmProfileController from '../controller/index';

const farmProfileRouter: Router = Router();
/**
 * @swagger
 * /farmProfiles:
 *  get:
 *    tags:
 *    - farmProfiles
 *    description: Use to request all farm profiles
 *    responses:
 *      '200':
 *         description: A successful response
 *         content:
 *          application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                     $ref: '#/components/schemas/FarmProfile
 *      '400':
 *        description: Bad request
 *        content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Error'
 *
 */
farmProfileRouter.get('/', FarmProfileController.getAll);

farmProfileRouter.post('/', FarmProfileController.create);

export default farmProfileRouter;
