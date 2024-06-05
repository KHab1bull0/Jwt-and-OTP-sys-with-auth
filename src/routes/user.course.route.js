import { Router } from "express";
import { setUserCourse } from "../controllers/user.course.controller.js";

export const userCourseRoute = Router();


userCourseRoute.post('/set-user-course', setUserCourse);
// userCourseRoute.get('course/:userId ', getUserCourse);
// userCourseRoute.delete('course/:id/user/:userId', deleteUserCourse);