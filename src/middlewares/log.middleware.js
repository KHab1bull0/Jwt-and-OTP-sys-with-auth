import logger from "../utils/logs.js"


export const logmiddleware = async (req, res, next) => {

    const log = `Request Method: ${req.method}
Request Url: ${req.url}`
    logger.http(log)

    next()
}