import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateConfigController } from "../controllers/CreateConfigController";
import { CreateProductController } from "../controllers/CreateProductController";
import  authmiddleware from "../middlewares/authmiddleware";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const createConfigController = new CreateConfigController();
const createProductController = new CreateProductController();
const authenticateUserController = new AuthenticateUserController();


router.post("/users", createUserController.handle);
router.post("/configs", createConfigController.handle);
router.post("/products", authmiddleware ,createProductController.handle);
router.post("/authenticate", authenticateUserController.handle);


export{router};
