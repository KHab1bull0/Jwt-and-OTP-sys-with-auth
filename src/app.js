import express from "express";
import { connection } from "./config/db.js";
import { router } from "./routes/index.route.js";
import { logmiddleware } from "./middlewares/log.middleware.js";


connection()

export const app = express()
app.use(express.json());
app.use(logmiddleware);

app.use(router);
