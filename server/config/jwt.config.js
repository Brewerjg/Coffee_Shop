const jwt = require("jsonwebtoken");
const secret = process.env.FIRST_SECRET_KEY;

module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.employeeToken, secret, (err, payload) => {
        if(err){
            res.status(401).json({verified: false});
        }else{
            next();
        }
    });
}