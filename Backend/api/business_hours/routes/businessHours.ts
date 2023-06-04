import { Router } from 'express';

import * as BusinessHoursController from '../controller/index';

const businessHoursRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Business Hours
 *   description: API endpoints for Business Hours
 */

/**
 * @swagger
 * /business-hours:
 *   get:
 *     summary: Get all business hours
 *     tags: [Business Hours]
 *     responses:
 *       '200':
 *         description: A list of business hours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BusinessHours'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
businessHoursRouter.get('/', BusinessHoursController.getAllBusinessHours);

/**
 * @swagger
 * /business-hours:
 *   post:
 *     summary: Create a new business hour
 *     tags: [Business Hours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBusinessHoursDTO'
 *     responses:
 *       '201':
 *         description: Created a new business hour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BusinessHours'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
businessHoursRouter.post('/', BusinessHoursController.createBusinessHours);

/**
 * @swagger
 * /business-hours/farm/{id}:
 *   get:
 *     summary: Get all business hours by farm ID
 *     tags: [Business Hours]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Farm ID
 *     responses:
 *       '200':
 *         description: A list of business hours for the given farm ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BusinessHours'
 *       '404':
 *         description: Business Hours not found for the given farm ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
businessHoursRouter.get(
  '/farm/:id',
  BusinessHoursController.getBusinessHoursByFarmId
);

export default businessHoursRouter;
