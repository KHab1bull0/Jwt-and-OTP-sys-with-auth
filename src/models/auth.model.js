import { Schema, model } from "mongoose";
import { hash } from 'bcrypt';

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
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    }
    
},{timestamps: true})

authschema.pre('save', async function(next) {
    try{
        const saltRounds = parseInt(process.env.password_salt);
        const hashedPassword =  await hash(this.password, saltRounds);
        this.password = hashedPassword;
        next()
    } catch (err) {
        next(err);
    }
})



export default model("authers", authschema);