import express from "express";
import {verifyEmailController} from "../controllers/verify/verifyEmailController.js";

const router = express.Router();

router.get("/verify-email/:token", verifyEmailController);


export default router;
