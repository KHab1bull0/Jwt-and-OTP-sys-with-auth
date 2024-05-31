import { Router } from "express";
import { authRouter } from "./auth.route.js";
import { fileRouter } from "./file.route.js";


export const router = Router();


router.use(authRouter);
router.use(fileRouter);