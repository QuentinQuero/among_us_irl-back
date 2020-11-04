'use strict';

const UserServices = require('../../services/UserServices');

const isUsedEmail = function (req, res, next) {
    console.log('UserController - isUsedEmail - start: ', req.query.email);
    UserServices.isUsedEmailAddress(req.query.email).then((response) => {
        console.log('UserController - isUsedEmail - end');
        res.json({
          status: 'success',
          isUsed: response
       });
    });
};

module.exports = isUsedEmail;