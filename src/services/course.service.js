import { Course } from "../models/course.model.js";

export const postOne = async (body) => {
    try{
        const data = await Course(body);
        data.save();
        return data
    } catch (err) {
        throw err
    }
}