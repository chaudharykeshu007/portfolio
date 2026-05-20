import { Router } from "express";
import { createUser} from '../controller/user.controller.js';

const authRoute = Router();


authRoute.post("/user", createUser);

export default authRoute;
