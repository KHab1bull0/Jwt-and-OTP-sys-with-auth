import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export const connectionMongo = async () => {
    try{
        const MONGO_URL = process.env.DB_URI;
        await connect(MONGO_URL);
        console.log("MongoDB ga ulandi...");
    } catch (err) {
        console.log(err);
        throw err
    }
};
