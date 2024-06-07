import { CourseFile } from "../models/mongodb/course.file.model.js"
import { Course } from "../models/mongodb/course.model.js";
import { File } from "../models/mongodb/file.model.js";


export const insertOne = async (body) => {
    try {

        const insertInfo = await CourseFile(body);
        insertInfo.save();
        return insertInfo;

    } catch (err) {
        throw err
    }
};



export const getfunc = async (body, option) => {
    try{
        if(option === 'getFileById'){
            const data = await File.find({_id: body});
            return data;
        };

        if(option === 'getCourseById'){
            const data = await Course.find({_id: body});
            return data;
        };

        if(option === 'getCourseFileByBoth'){
            const data = await CourseFile.find({fileId: body.fileId, courseId: body.courseId});
            return data;
        };

        if(option === 'getCourseFileByCourseId'){
            const data = await CourseFile.find({courseId: body});
            return data;
        }
        return false

    } catch(err){
        throw err
    }
}

export const deleteOnefile = async(body) => {
    try{
        console.log(body);
        const data = await CourseFile.deleteOne(body);
        return data;

    } catch(err){
        throw err
    }
}