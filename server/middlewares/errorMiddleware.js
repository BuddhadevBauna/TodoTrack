const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Server Error";

    return res.status(status).json({message});
}

export default errorMiddleware;