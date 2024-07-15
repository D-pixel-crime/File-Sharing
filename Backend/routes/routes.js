import { Router as router } from "express";
import { uploadImage } from "../controllers/imageController.js";

router.post("/upload", uploadImage);

export default router;
