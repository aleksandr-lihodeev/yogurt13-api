import express from "express";
import {verifyToken} from "../middlewares/verifyToken.js";
import {getCrudController} from "../controllers/crud/getCrudController.js";
import {createCrudController} from "../controllers/crud/createCrudController.js";
import {editCrudController} from "../controllers/crud/editCrudController.js";
import {statusCrudController} from "../controllers/crud/statusCrudController.js";
import {deleteCrudController} from "../controllers/crud/deleteCrudController.js";
import {imageEditCrudController} from "../controllers/crud/imageEditCrudController.js";

const router = express.Router();

router.get("/crud-get", verifyToken, getCrudController);
router.post("/create-new-crud", verifyToken, createCrudController);
router.patch("/:id/title", verifyToken, editCrudController);
router.patch("/:id/status", verifyToken, statusCrudController);
router.patch("/:id/image", verifyToken, imageEditCrudController);
router.delete("/:id/delete", verifyToken, deleteCrudController);

export default router;
