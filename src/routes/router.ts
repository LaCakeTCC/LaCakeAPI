import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateConfigController } from "../controllers/CreateConfigController";

const router = Router();

const createUserController = new CreateUserController();
const createConfigController = new CreateConfigController();


router.post("/users", createUserController.handle);
router.post("/configs", createConfigController.handle);



export{router};