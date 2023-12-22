import express from "express";
import {registerValidate} from "../validators/registerValidate.js";
import {errorsValidation} from "../middlewares/errorsValidation.js";
import {registerController} from "../controllers/auth/registerController.js";
import {loginValidate} from "../validators/loginValidate.js";
import {loginController} from "../controllers/auth/loginController.js";

const router = express.Router();

router.post("/register", registerValidate, errorsValidation, registerController);
router.post("/login", loginValidate, errorsValidation, loginController);

export default router;
