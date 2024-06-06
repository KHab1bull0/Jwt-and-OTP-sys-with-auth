import { Router } from "express";
import { authRouter } from "./auth.route.js";
import { fileRouter } from "./file.route.js";
import { courseRouter } from "./course.route.js";
import { userCourseRoute } from "./user.course.route.js";
import { courseFileRouter } from "./course.file.route.js";

export const router = Router();


router.use('/auth',authRouter);
router.use('/file',fileRouter);
router.use('/course',courseRouter);
router.use('/usercourse',userCourseRoute);
router.use('/coursefile', courseFileRouter);

