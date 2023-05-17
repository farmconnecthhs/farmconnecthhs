import { Router } from 'express';

import * as FarmProfileController from '../controller/index';

const farmProfileRouter: Router = Router();
/**
 * @swagger
 * /farmProfiles:
 *  get:
 *    summary: Get all farm profiles
 *    operationId: getAllFarmProfiles
 *    tags:
 *    - farmProfiles
 *    parameters:
 *      - name: sortDir
 *        in: query
 *        description: Sort by ascending or descending order
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - asc
 *            - desc
 *      - name: limit
 *        in: query
 *        description: Limit the number of farmProfiles returned
 *        required: false
 *        schema:
 *          type: integer
 *          minimum: 1
 *          maximum: 20
 *      - name: location
 *        in: query
 *        description: Filter by location
 *        required: false
 *        schema:
 *          type: string
 *      - name: paymentType
 *        in: query
 *        description: Filter by payment type
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - cash
 *            - card
 *            - both
 *      - name: category
 *        in: query
 *        description: Filter by category
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - fruits
 *            - vegetables
 *            - grains
 *            - nuts
 *            - dairy
 *            - meat
 *            - poultry
 *            - fish
 *            - eggs
 *            - flowers
 *            - herbs
 *            - mushrooms
 *            - honey
 *            - other
 *      - name: product
 *        in: query
 *        description: Filter by product
 *        required: false
 *        schema:
 *          type: string
 *      - name: rating
 *        in: query
 *        description: Filter by rating
 *        required: false
 *        schema:
 *          type: integer
 *          minimum: 1
 *          maximum: 5
 *    responses:
 *      '200':
 *        description: A list of farm profiles was successfully retrieved
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FarmProfile'
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
farmProfileRouter.get('/', FarmProfileController.getAllFarmProfiles);
/**
 * @swagger
 * /farmProfiles:
 *  post:
 *    summary: Create a farm profile
 *    operationId: createFarmProfile
 *    tags:
 *    - farmProfiles
 *    requestBody:
 *      description: Farm profile object that needs to be added
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/FarmProfile'
 *    responses:
 *      '201':
 *        description: Created a farm profile object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FarmProfile'
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
farmProfileRouter.post('/', FarmProfileController.createFarmProfile);

export default farmProfileRouter;
