import { postOne } from "../services/course.service.js";
import { courseValidation } from "../validation/course.valid.js";


export const postCourse = async (req, res) => {
    try{

        const reqbody = await courseValidation(req.body);
        console.log(reqbody);

        const data = await postOne(reqbody);

        return res.status(201).send({
            message: "Course Added to database"
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err.message
        })
    }
}