// import otpGenerator from 'otp-generator';
import Otp from '../models/otp.model.js'


export const createOtp = async (email, otp) => {
    try{

        const data = await Otp({
            email: email,
            otpCode: otp
        });

        await data.save()

    } catch (err) {
        console.log(err);
        throw err
    }
}

export const findOtp = async (email) => {
    try{

        const otp = await Otp.findOne({
            email,
        })
    
        return otp;

    } catch (err) {
        console.log(err);
        throw err
    }
};

export const deleteOtp = async (email) => {
    try{

        const data = await Otp.deleteOne({
            email: email
        });
        
    } catch (err) {
        console.log(err);
        throw err
    }
}