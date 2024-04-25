import { Router } from "express";
import { AuthController } from "./controllers";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const controller = new AuthController()// creamos una instancia de authContoller y lo almacenamos en controller

            router.post('/login', controller.loginUser)// respondemos con un mensaje login

            router.post('/register', controller.registerUser)// respondemos con un mnesaje register

            return router;
    }

}