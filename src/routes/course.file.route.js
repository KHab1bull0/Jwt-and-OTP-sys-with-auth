import { Router } from "express";

export const courseFileRouter = Router();


courseFileRouter.post('/set-course-file', setCourseFile);
courseFileRouter.get('/file/:course', get);
courseFileRouter.post('/file/:id/course/:courseId', setCourseFile);


