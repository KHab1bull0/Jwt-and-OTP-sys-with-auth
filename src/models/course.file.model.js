import { Schema, model } from "mongoose";

const courseFileSchema = new Schema({
    fileId: {
        type: Schema.Types.ObjectId,
        ref: 'files',
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required: true
    }
})