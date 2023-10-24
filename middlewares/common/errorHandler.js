const createError = require('http-errors');

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "your requested content is not found"));
}
 
// not found handler
function errorHandler(err, req, res, next) { 
    res.locals.error = process.env.NODE_ENV === 'developement' ? err : {message : err.message};
    res.status(err.status || 500);

    if (res.locals.html) {
        // html response
        res.render('error', {
            title: "Error Page"
        });
    } else {
        // json response
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
};