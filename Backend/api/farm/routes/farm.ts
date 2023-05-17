import { Router } from 'express';

import * as FarmController from '../controller/index';

const farmRouter: Router = Router();
/**
 * @swagger
 * /farms:
 *  get:
 *    tags:
 *    - Farms
 *    description: Use to request all farms
 *    responses:
 *      '200':
 *         description: A successful response
 *         content:
 *          application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                     $ref: '#/components/schemas/Farm'
 *      '400':
 *        description: Bad request
 *        content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Error'
 *
 */
farmRouter.get('/', FarmController.getAllFarms);
/**
 * @swagger
 * /farms:
 *  post:
 *    summary: Create a farm
 *    operationId: createFarm
 *    tags:
 *    - farms
 *    requestBody:
 *      description: Farm object that needs to be added
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Farm'
 *    responses:
 *      '201':
 *        description: Created a Farm object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Farm'
 *      '400':
 *        $ref: '#/components/responses/BadRequest'
 *      '401':
 *        $ref: '#/components/responses/Unauthorized'
 *      '403':
 *        $ref: '#/components/responses/Forbidden'
 *      '404':
 *        $ref: '#/components/responses/NotFound'
 *      '500':
 *        $ref: '#/components/responses/InternalServerError'
 */
farmRouter.post('/', FarmController.createFarm);

export default farmRouter;
