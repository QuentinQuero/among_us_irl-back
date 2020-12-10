'use strict';

const boom = require('@hapi/boom');


const isAdmin = function (req, res, next) {
    console.log('Security - IsAdmin - begin');
    if (req.currentUser.role ===  'user') {
        return next(boom.forbidden("You are not allowed"))
    } else {
        next();
    }
}

module.exports = isAdmin;
