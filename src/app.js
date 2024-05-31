import express from "express";
import { connection } from "./config/db.js";
import { router } from "./routes/index.route.js";


connection()

export const app = express()
app.use(express.json());

app.use(router);
