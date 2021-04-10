const Validator = require('validatorjs');
// regex litrally suck user
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

// password strength test
// Validator.register('strict', value => passwordRegex.test(value),
    // 'password must contain at least one uppercase letter, one lowercase letter and one number');

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = { validator };