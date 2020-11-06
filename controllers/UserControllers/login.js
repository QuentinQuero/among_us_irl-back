'use strict';

const UserService = require('../../services/UserServices');
const boom = require('@hapi/boom');

const login = function (req, res, next) {
    console.log('UserController - login - start');
    UserService.logUser(req.body.email, req.body.password)
        .then((response) => {
            console.log('UserController - login - end');
            res.json({
                status: 'success',
                message: 'You logged successfully',
                jwt: response.token,
                user: {
                    email: response.user.email,
                    role: response.user.role
                }
            });
        })
        .catch((error) => {
            console.error('UserController - login - error:', error);
            res.json({
                status: 'Error',
                message: error
            });
        });
};

module.exports = login;
