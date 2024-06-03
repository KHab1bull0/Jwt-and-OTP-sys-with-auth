import pkg from 'winston';
import 'winston-mongodb'

const { createLogger, transports, format, all } = pkg;


const logger = createLogger({
    level: "silly",
    format: format.combine(
        // format.colorize(),
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
            db: "mongodb://localhost:27017/loggers",
            collection: "Http_logs",
            options: { useUnifiedTopology: true}
        })
    ]
})

export default logger




