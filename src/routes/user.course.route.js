import { Router } from "express";

export const userCourseRoute = Router();


userCourseRoute.get('set-user-course', setUserCourse);
userCourseRoute.get('course/:userId ', getUserCourse);
userCourseRoute.delete('course/:id/user/:userId', deleteUserCourse);