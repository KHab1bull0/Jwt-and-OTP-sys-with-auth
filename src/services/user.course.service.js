import { UserCourse } from "../models/user.course.model.js";


export const setCourse = async(body) => {
    try{

        const data = await UserCourse(body);
        data.save()
        return data;

    } catch (err){
        throw err
    }
}