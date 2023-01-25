const jwt = require("jsonwebtoken");
const JWT_SECRET = "Darshit Is A Good Boy";

const fetchuser = (req,res,next) => {
    // Get The user from the jwt tokan and add id to req object
    const tokan = req.header('auth-tokan');
    if(!tokan) {
        res.status(401).send({error: " Plese Authenticate using id tokan"})
    }
    try {
        const data = jwt.verify(tokan,JWT_SECRET)
        req.user = data.user;
        
    } catch (error) {
        res.status(401).send({error: " Plese Authenticate using id tokan"})
    }
   
    next()
}

module.exports = fetchuser;