'use strict';

const boom = require('@hapi/boom');
const User = require('../../schema/UserSchema');
const jwt = require('jsonwebtoken');

const isAuthenticated = function (req, res, next) {
    console.log('Security - Authenticator - begin');
    let token = req.headers.authorization.replace('Bearer ', '');
    jwt.verify(token, process.env.secretKey, function (err, decoded){
        if (err) {
            console.log('Security - Authenticator - error', err);
            return next(boom.forbidden("Invalid token"));
        } else {
            User.findById(decoded.id, "-password", function (err, user) {
                if (err) {
                    console.log('Security - Authenticator - error -user not fount');
                    return next(boom.badRequest("User not found"));
                }
                req.currentUser = user;
                console.log('Security - Authenticator - user is logged');
                next();
            })
        }
    });
};

module.exports = isAuthenticated;
