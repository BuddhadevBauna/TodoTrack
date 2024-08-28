const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        res.success(200, userData);
    } catch (error) {
        // console.log(`error from user route ${error}`);
        const err = new Error('Server Error: can not get userdata');
        error.status = 500;
        return next(error);
    }
}

export default user;