import { Router } from "express";
import { postCourse } from "../controllers/course.controller.js";



const courseRouter = Router()

courseRouter.post('/course', postCourse);
courseRouter.get('/course/all', getAllCourse);
courseRouter.get('/course/:id', getOneCourse);
courseRouter.put('/course/:id', putOneCourse);
courseRouter.delete('/course/:id', deleteOneCourse);