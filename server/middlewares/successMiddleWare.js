const successMiddleware = (req, res, next) => {
    res.success = (statusCode = 200, data = [], message = 'Operation successful') => {
        res.status(statusCode).json({
            success: true,
            message: message,
            data: data,
        });
    };
    next();
};

export default successMiddleware;