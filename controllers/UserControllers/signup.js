'use strict';

const UserServices = require('../../services/UserServices');
const boom = require('@hapi/boom');

const signup = function (req, res, next) {
    console.log('UserController - signup - start');
    if (req.body.user.password !== req.body.user.confirmPassword) {
        return next(boom.badRequest("Password and confirm password aren't the same"));
    } else {
        UserServices.isUsedEmailAddress(req.body.user.email).then((response) => {
            if (!response) {
                UserServices.createUser(req.body.user.email, req.body.user.password)
                    .then((response) => {
                        res.json({
                            status: "success",
                            message: `User ${response.email} have been created`
                        })
                    })
                    .catch((error) => {
                        return next(boom.badRequest(error));
                    });
            } else {
                console.error('UserController - signup - email already created');
                res.json({
                    status: "error",
                    message: `Email address already used : ${req.body.user.email}`
                });
            }
        });
    }
    console.log('UserController - signup - end');
};

module.exports = signup;