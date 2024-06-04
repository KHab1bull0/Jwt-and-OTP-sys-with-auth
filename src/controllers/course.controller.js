import { postOne, getAll } from "../services/course.service.js";
import { errorLogger } from "../utils/logs.js";
import { courseValidation } from "../validation/course.valid.js";


export const postCourse = async (req, res) => {
    try{

        const reqbody = await courseValidation(req.body);
        console.log(reqbody);

        const data = await postOne(reqbody);

        return res.status(201).send({
            message: "Course Added to database",
            data: data
        });

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message)
        return res.status(500).send({
            message: err.message
        })
    }
}

export const getAllCourse = async (req, res) => {
    try{
        
        const data = await getAll();

        return res.status(200).send({
            message: "All courses",
            data: data
        })

    }catch (err){
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            error: err
        })
    }
}