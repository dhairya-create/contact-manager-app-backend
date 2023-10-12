const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  //Extracting token passed in header section
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      //If the token is not valid
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      req.user = decoded.user
      next();
      
    });

    if(!token){
        res.status(401);
        throw new Error("User is not authorised")
    }
  }
});

module.exports = validateToken;
