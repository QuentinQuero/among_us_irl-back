'use strict';

const UserServices = require('../../services/UserServices');

const isUsedEmail = function (req, res, next) {
    console.log('UserController - isUsedEmail - start: ', req.body.email);
    UserServices.isUsedEmailAddress(req.body.email).then((response) => {
        console.log('UserController - isUsedEmail - end');
        res.json({
          status: 'success',
          isUsed: response
       });
    });
};

module.exports = isUsedEmail;