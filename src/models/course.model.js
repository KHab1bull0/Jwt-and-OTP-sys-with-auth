import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    
}, {
    timestamps: Date.now
})

export const Course = model('Courses', courseSchema);