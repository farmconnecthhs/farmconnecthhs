import Router from "express";
import * as UserController  from "../controller/index";

const UserRouter = Router();

UserRouter.get("/", UserController.getAll);

export default UserRouter;