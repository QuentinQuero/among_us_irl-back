'use strict';

const isUserAdmin = function (req, res, next) {
    console.log('User controller - isUserAdmin - begin');
    console.log('User controller - isUserAdmin - end');
    res.json({
       message: 'is user admin',
       data: req.currentUser.role === 'admin'
    });
};

module.exports = isUserAdmin;
