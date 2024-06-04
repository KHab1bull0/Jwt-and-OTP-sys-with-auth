import express from "express";
import { connection } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logmiddleware } from "./middlewares/log.middleware.js";
import logger from "./utils/logs.js";


connection()

export const app = express()
app.use(express.json());
app.use(logmiddleware);

process.on('uncaughtException', (err) => {
    console.log(err);
    logger.error(err.message);
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    throw err;
});

app.use(router);
