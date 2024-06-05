import { setCourse } from "../services/user.course.service.js";
import { errorLogger } from "../utils/logs.js";
import { userCourseValidation } from "../validation/user.course.valid.js";


export const setUserCourse = async (req, res) => {
    try{
        
        const body = await userCourseValidation(req.body);

        const data = await setCourse(body);

        return res.status(201).send({
            message: "User Course Created",
            data: data
        })

    } catch(err) {
        console.log(err);
        errorLogger.error(err.massage);
        return res.status(500).send({
            error: err
        });
    }
}

export const getUserCourse = async (req, res) => {
    try{

    } catch (err) {
        console.log(err);
        errorLogger.error(err);
        return res.status(500).send({
            error: err
        })
    }
}
