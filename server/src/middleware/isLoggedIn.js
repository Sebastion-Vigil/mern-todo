
const jwt = require('jsonwebtoken');
// express middleware function -> code will run before every single endpoint request
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send('invalid credentials');
  } else {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => { // console.log(decoded) 
      if (err) {
        res.status(403).send('invalid credentials');
      } else {
        next(); // allows router to go to next function if user logged in
      }
    });
  }
}