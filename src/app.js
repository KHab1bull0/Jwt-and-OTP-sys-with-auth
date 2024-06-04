import express from "express";
import { connection } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logmiddleware } from "./middlewares/log.middleware.js";
import { errorLogger } from "./utils/logs.js";


connection()

export const app = express()
app.use(logmiddleware);
app.use(express.json());


app.use(router);
