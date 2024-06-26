import express, { urlencoded } from "express";
import { connectionMongo } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logMiddleware } from "./middlewares/log.middleware.js";
import { errorLogger } from "./utils/logs.js";
import { createUserTable } from "./models/postgres/user.model.js";


try {
    await connectionMongo();
} catch (err) {
    console.log(err);
    errorLogger.error(err);
}


export const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logMiddleware);

app.use(router);
