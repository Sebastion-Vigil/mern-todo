
const jwt = require('jsonwebtoken');
// express middleware function -> code will run before every single endpoint request
module.exports = async (req, res, next) => {
  try {

    // get token from auth header
    const token = await req.headers.authorization.split(" ")[1];

    // check if token matches alleged origin
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    // get logged in user's data
    const user = await decodedToken;

    // pass user down to endpoints
    req.user = user;

    // pass functionality down to the endpoint
    // (allows router to go to next function if user logged in)
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};