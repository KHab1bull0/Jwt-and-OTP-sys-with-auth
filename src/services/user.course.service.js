import { UserCourse } from "../models/user.course.model.js";
import { Course } from "../models/course.model.js";
import { User } from '../models/auth.model.js'



export const setCourse = async (body) => {
    try {

        const data = await UserCourse(body);
        data.save()
        return data;

    } catch (err) {
        throw err
    }
}


export const getCourse = async (courseId) => {
    try {
        const course = await Course.find({ _id: courseId });
        return course

    } catch (err) {
        throw err
    }
}

export const getOne = async (userId, courseId) => {
    try {
        const data1 = await User.find({ _id: userId });
        const data2 = await UserCourse.find({ userId: userId });
        const data3 = await Course.find({_id: courseId});
        const data4 = await UserCourse.find({ courseId: courseId});
        return { data1, data2, data3, data4};
    } catch (err) {
        throw err
    }
}

export const deleteOne = async (userId, courseId) => {
    try {
        const data = await UserCourse.deleteOne({
            userId: userId,
            courseId: courseId
        });
        return data;

    } catch (err) {
        throw err
    }
}