const jwt = require('jsonwebtoken');
const User = require('../models/userScehema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const crypto = require('crypto');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };
    res.cookie('jwt', token, cookieOptions);
    user.password = undefined;
    user.confirmPassword = undefined;
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }
    createSendToken(user, 200, res);
});

exports.signup = catchAsync(async (req, res, next) => {
    const { name, email, password, confirmPassword, role, companyName, country } = req.body;
    if (!name || !email || !password || !confirmPassword) {
        return next(new AppError('Please provide name, email, password, and confirmPassword', 400));
    }
    if (role === 'company') {
        if (!companyName || !country) {
            return next(new AppError('Please provide company name and country/address for this role', 400));
        }
    }
    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
        role,
        companyName: role === 'company' ? companyName : undefined,
        country: role === 'company' ? country : undefined
    });

    createSendToken(newUser, 201, res);
});


exports.forgotPassword = catchAsync(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError('There is no user with that email address.', 404));
    }
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    res.json({
        resetToken
    });
});
exports.resetPassword = catchAsync(async (req, res, next) => {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    if (!user) {
        return next(new AppError('Token is invalid or has expired', 400));
    }
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    createSendToken(user, 200, res);
});


