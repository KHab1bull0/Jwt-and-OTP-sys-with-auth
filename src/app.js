import express from "express";
import { connection } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logmiddleware } from "./middlewares/log.middleware.js";
import { errorLogger } from "./utils/logs.js";


await connection()

export const app = express()
app.use(express.json());
app.use(logmiddleware);

process.on('uncaughtException', (err) => {
    console.log(err);
    errorLogger.error(err.message);
});
      
process.on('unhandledRejection', (err) => {
    console.log(err);
    throw err;
});

app.use(router);
