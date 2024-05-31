import { Schema, model } from "mongoose";


const authschema = new Schema({
    fileUrl: {
        type: String,
    },
    filename: {
        type: String
    }
},{timestamps: true})


export default model("files", authschema);

