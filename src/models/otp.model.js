import { Schema, model } from 'mongoose';


export const otpSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    otpCode:{
        type: String,
        maxlength: 6,
        minlength: 6,
        require: true
    },
    createAt: {
		type: Date,
		default: Date.now,
	},
});


export  default model('Otps', otpSchema);