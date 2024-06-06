import { Router } from "express";
import { authRouter } from "./auth.route.js";
import { fileRouter } from "./file.route.js";
import { courseRouter } from "./course.route.js";
import { userCourseRoute } from "./user.course.route.js";

export const router = Router();


router.use(authRouter);
router.use(fileRouter);
router.use(courseRouter);
router.use(userCourseRoute);

