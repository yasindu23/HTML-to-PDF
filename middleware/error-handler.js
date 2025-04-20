const CustomError = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
    console.log(err)
    if (err instanceof CustomError) {
        return res.status(400).json({ success: false, message: err.message });
    }

    res.status(500).json({ success: false, message: 'Something went wrong!' });
}

module.exports = errorHandler;