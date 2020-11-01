var jwt = require("jsonwebtoken")

const jwtvalidation = (req, res, next) => {

    

    const token = req.headers.auth
    console.log(req.headers)

    if (token) {
        try {
            const deoced = jwt.verify(token, "disaster")
            req.decoded = deoced
            next()
        } catch (error) {
            console.log('token veruy error ===========>')
            res.status(401).send("invalid token")
        }
    }
    else{
        res.status(403).send('no token present')
    }
} 

module.exports = jwtvalidation