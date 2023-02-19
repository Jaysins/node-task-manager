const {CustomApiError} = require("../errors/custom_error")
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg: err.message})
    }

    const {errors: {name: {properties: {message}}}} = err
    return res.status(500).json({msg: message})
}

module.exports = errorHandlerMiddleware
