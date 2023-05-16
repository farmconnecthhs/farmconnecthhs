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
farmRouter.get('/', FarmController.getAll);
/**
 * @swagger
 * /farms:
 *   post:
 *     tags:
 *       - Farms
 *     description: Use to create a new farm
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farm'
 *     responses:
 *       '201':
 *         description: Farm created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Farm'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 */
farmRouter.post('/', FarmController.create);

export default farmRouter;
