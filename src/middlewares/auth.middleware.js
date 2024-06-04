import dotenv from 'dotenv';
import { tokenVerify } from '../utils/jwt.js'
dotenv.config();

export const userMiddleware = async (req, res, next) => {

    try{
        const [type, token] = req.headers.authorization.split(' ');

        if(type != 'Bearer'){
            return res.status(401).send({
                error: "Access denied"
            });
        };
        const decoded =  tokenVerify(token);
        req.user = decoded
        next();

    } catch (err) {
        console.log(err);
        logger.error(err.message);
        return res.status(401).send({
            error: "Invalid token"
        });
    };
};