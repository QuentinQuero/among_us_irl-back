const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

/**
 * Hash password
 */
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = new mongoose.model('User', userSchema);