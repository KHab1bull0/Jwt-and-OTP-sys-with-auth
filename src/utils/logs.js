import pkg from 'winston';
import 'winston-mongodb'
import { config } from "dotenv";
config()

const { createLogger, transports, format, all } = pkg;


export const httpLogger = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp(),
        format.simple(),
        // format.json(),
        // format.prettyPrint(),
        // format.colorize({ all: true }),
    ),
    transports: [
        new transports.Console(),
        // new transports.File({filename: 'application.log'}),
        new transports.MongoDB({
            level: "silly",
            db: process.env.DB_URL,
            collection: "Http_logs",
            options: { useUnifiedTopology: true }
        })
    ],

    exceptionHandlers: [new transports.MongoDB({
        level: "silly",
        db: process.env.DB_URL,
        collection: 'exceptionHandlers',
        options: { useUnifiedTopology: true }
    })],
    rejectionHandlers: [new transports.MongoDB({
        level: "silly",
        db: process.env.DB_URL,
        collection: 'rejectionHandlers',
        options: { useUnifiedTopology: true }
    })]

});


export const errorLogger = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp(),
        format.simple(),
        // format.json(),
        // format.prettyPrint(),
        // format.colorize({ all: true }),
    ),
    transports: [
        new transports.Console(),
        // new transports.File({filename: 'application.log'}),
        new transports.MongoDB({
            level: "silly",
            db: process.env.DB_URL,
            collection: "Error_logs",
            options: { useUnifiedTopology: true }
        })
    ]
})






