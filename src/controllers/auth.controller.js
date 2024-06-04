import { userValidation } from "../validation/auth.valid.js";
import { otpValidation } from "../validation/opt.valid.js";
import otpGenerator from 'otp-generator'
import { getMe, signIn, signUp, updateUserStatus, getAll, deleteOne, getOne } from "../services/auth.service.js";
import { accessTokenGenerator, refreshTokenGenerator } from "../utils/jwt.js";
import { createOtp, deleteOtp, findOtp } from "../services/otp.service.js";
import { sendOtp } from "../utils/email.js";
import { errorLogger } from "../utils/logs.js";



export const signUpUser = async (req, res) => {
    try {
        const otpnumber = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        userValidation(req.body);

        await signUp(req.body);

        await createOtp(req.body.email, otpnumber);
        const otpResponse = await sendOtp(otpnumber, req.body.email);

        return res.status(200).send({
            message: "User created and send verify code to your email!",
        });

    } catch (err) {
        console.log(err.message);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err.errorResponse.errmsg
        });
    };
};

export const signInUser = async (req, res) => {
    try {
        userValidation(req.body);

        const user = await signIn(req.body.login);

        if (user.length == 0) {
            return res.status(400).send({
                message: "Bad request",
                error: "User not found"
            });
        }

        const accessToken = accessTokenGenerator(req.body.login);
        const refreshToken = refreshTokenGenerator(req.body.login);


        return res.status(200).send({
            message: "Ok",
            accessToken: accessToken,
            refreshToken: refreshToken
        });

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

export const getMeUser = async (req, res) => {
    try {

        const userInfo = req.user;

        const data = await getMe(userInfo.login);
        console.log(data);

        return res.status(200).send({
            data: data[0]
        });

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

export const getallUsers = async (req, res) => {
    try {

        const users = await getAll();
        return res.status(200).send({
            data: users
        })

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        })
    }
}

export const logoutUser = async (req, res) => {
    try {

        return res.status(200).send({
            message: "Logout successfully"
        })

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await deleteOne(id);
        const user = await getOne(id);
        await deleteOtp(user.email);
        return res.status(200).send({
            message: "Deleted successfully"
        })

    } catch (err) {
        console.log(err);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: err
        });
    };
}

export const checkOtp = async (req, res) => {
    try {
        await otpValidation(req.body);
        const { email, otp } = req.body;
        const user = await findOtp(email);
        console.log(user)

        if (user.otpCode !== otp) {
            return res.status(422).send({
                message: "Invalid OTP"
            });
        };

        await deleteOtp(email);
        await updateUserStatus(email);
        return res.status(200).send({
            message: "Foydalanuvchi tasdiqlandi!"
        })

    } catch (error) {
        console.log(error);
        errorLogger.error(err.message);
        return res.status(500).send({
            message: "Xatolik",
            error: error
        });
    }
}