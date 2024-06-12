const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['tourist', 'company'],
        default: 'tourist'
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
    },
    passwordResetToken: String,
    passwordResetExpires: Date
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

userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; 
    return resetToken;
};
const User = mongoose.model('User', userSchema);
module.exports = User;