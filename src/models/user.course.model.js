import { Schema, model } from 'mongoose';


const userCourseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'authers',
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required: true
    }
});

export const UserCourse = model('userCourse', userCourseSchema);
