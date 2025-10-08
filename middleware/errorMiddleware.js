// Unsupported/404 endpoints


const notFound = (req, res, next) => {
    const error = new Error(`NOT Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error middleware
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    res.status(error.code || 500).json({
        message: error.message || "An Unknown Error occurred."
    });
};

module.exports = { notFound, errorHandler };
