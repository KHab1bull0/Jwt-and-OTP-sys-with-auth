import { userValidation } from "../validation/auth.valid.js";
import { otpValidation } from "../validation/opt.valid.js";
import otpGenerator from 'otp-generator'
import { getMe, updateUserStatus, getAll, deleteOne, getOne, getUser, createUser } from "../services/auth.service.js";
import { accessTokenGenerator, refreshTokenGenerator, tokenVerify } from "../utils/jwt.js";
import { createOtp, deleteOtp, findOtp } from "../services/otp.service.js";
import { sendOtptoEmail } from "../utils/email.js";
import { errorLogger } from "../utils/logs.js";
import { compare } from 'bcrypt'


export const signUpUser = async (req, res) => {
    try {
        const otpnumber = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        const body = await userValidation(req.body);

        await createUser(body);
        await createOtp(req.body.email, otpnumber);

        const otpResponse = await sendOtptoEmail(otpnumber, req.body.email);

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
        userValidation(req.body, 0);

        const user = await getUser(req.body.email);

        if (!user) {
            return res.status(400).send({
                error: "User not found"
            });
        }
        const data = await compare(req.body.password, user.password);

        if(!data){
            return res.status(400).send({
                message: "Password incorrect"
            });
        }

        const accessToken = accessTokenGenerator({email: user.email, role: user.role});
        const refreshToken = refreshTokenGenerator({email: user.email, role: user.role});

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
            error: err.errorResponse.errmsg
        });
    };
}

export const getMeUser = async (req, res) => {
    try {

        const userInfo = req.user;

        const data = await getMe(userInfo.email);

        return res.status(200).send({
            data: data[0],
            // data: userInfo
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
        const user = await getOne(id);
        await deleteOne(id);
        console.log(user);

        await deleteOtp(user[0].email);
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

        if (user == null) {
            return res.status(422).send({
                message: "This user's otp does not exist"
            })
        }

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
        errorLogger.error(error.message);
        return res.status(500).send({
            message: "Xatolik",
            error: error
        });
    }
}