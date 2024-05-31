import { Schema, model } from "mongoose";


const authschema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        min: 5,
        max: 10,
        require: true
    },
    status: {
        type: Boolean,
        enum: [true, false],
        default: false
    }
},{timestamps: true})


export default model("authers", authschema);