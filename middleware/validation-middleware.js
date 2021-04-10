const { validator } = require('../helper/validate');

const register = async (req, res, next) => {
    const validationRule = {
        "email": "required|string|email",
        "fname": "required|string",
        "lname": "required|string",
        "number": "required|string",
        "address": "required|string",
        // "pass": "required|string|min:6|confirmed|strict",
    };
    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            console.log("ok");
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
};

module.exports = { register };