const jwt = require('jsonwebtoken');

//20 minutes in second
const maxAgeVal = 1 * 60;

const createToken = ( user_id ) =>{
    return jwt.sign({ _id: user_id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAgeVal
    });
}

exports.maxAgeVal = maxAgeVal;
exports.createToken = createToken;