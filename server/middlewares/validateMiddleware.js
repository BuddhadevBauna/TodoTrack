const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        return next();
    } catch (err) {
        // console.log(err);
        const message = err.errors[0].message;
        // console.log(message)
        const error = new Error(message);
        error.status = 422;
        return next(error);
    }
}

export default validate;