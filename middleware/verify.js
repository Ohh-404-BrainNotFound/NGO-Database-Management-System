var jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = () => {
    var token = req.headers[x-access-token];
    if(!token)
    return res.status(403).send({ auth: false, message: 'toekn de re bhai.' });

    jwt.verify(token, process.env.secret, (err, decoded) => {      
        if (err) 
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.id;
        next();
      });
}

module.exports = verify;