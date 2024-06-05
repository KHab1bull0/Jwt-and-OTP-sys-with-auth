import { userCourse } from "../models/user.course.model.js";
import { errorLogger } from "../utils/logs.js";


export const setUserCourse = async (req, res) => {
    try{

    } catch(err) {
        console.log(err);
        errorLogger.error(err.massage);
    }
}