const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['tuorist', 'company'],
        default: 'tuorist'
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        select: false
    },
    confirmPassword: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        required: function () {
            return this.role === 'company';
        }
    },
    country: {
        type: String,
        required: function () {
            return this.role === 'company';
        }
    }
});

userSchema.pre('save', function (next) {
    if (this.password !== this.confirmPassword) {
        return next(new Error('Passwords do not match'));
    }
    this.confirmPassword = undefined;
    next();
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
// comparing if passwords are correct to login
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};


const User = mongoose.model('User', userSchema);
module.exports = User;