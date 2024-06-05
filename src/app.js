import express from "express";
import { connectionMongo } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logmiddleware } from "./middlewares/log.middleware.js";
import { errorLogger } from "./utils/logs.js";


try{
    await connectionMongo();
} catch(err){
    console.log(err);
    errorLogger.error(err);
    process.exit(1);
}

export const app = express()
app.use(express.json());
app.use(logmiddleware);

app.use(router);
