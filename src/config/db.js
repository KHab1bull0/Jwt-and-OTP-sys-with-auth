import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connection = async () => {
    const MONGO_URL = process.env.DB_URL;
    await connect(MONGO_URL);
    console.log("MongoDB ga ulandi...");
};
