import { courseValidation } from "../validation/course.valid.js";


export const postCourse = async (req, res) => {
    try{

        const reqbody = await courseValidation(req.body);

        

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err.message
        })
    }
}