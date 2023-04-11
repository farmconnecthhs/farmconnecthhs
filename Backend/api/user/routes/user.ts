import Router from "express";
import * as UserController  from "../controller/index";

const UserRouter = Router();
/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - Users
 *    description: Use to request all users
 *    responses:
 *    '200':
 *       description: A successful response
 *       content:
 *       application/json:
 *       schema:
 *       type: array
 *       items:
 *       $ref: '#/components/schemas/User'
 */
UserRouter.get("/", UserController.getAll);

export default UserRouter;