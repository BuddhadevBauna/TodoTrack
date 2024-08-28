const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.status || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || "Server Error",
    });
}

export default errorMiddleware;