### Initial Observations: ###

 #### Unique Highlights: ####
 - react hooks! yay!
 - react-router6+
 - react-query => like jquery? research & learn 2 use with the quickness!
 - vite instead of create-react-app 
 - lodash, pkg o' f() 4 iterating arrs, objs, strs, slicing & dicing! 

 #### Client: ####
  - npm run dev -> start up front end in dev mode
  - no public folder -> index.html just out there
  - using .jsx files, e.g., App.jsx => research this online (pros/cons)
  - main.jsx file replaces traditional (2 me, at least ";-)") index.js file
  - vite -> used instead of create-react-app => research this online (how 2 use, duh!)

 #### Server ####
  - i C .js files, e.g., the good ol' traditional index.js file!
   - research Y set up this way compared to .jsx files, e.g., main.jsx in client

### Other ###
 #### Fix NPM Security Vulnerabilities ####
 - https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities

 
##### Link to Time Complexity With Simple Examples #####
 - https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/

 #### Link to MERN Stack App w/auth tutorial
 - https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/

 #### Progress Notes: ####
  - https://stackoverflow.com/questions/32308063/data-modeling-in-mongodb-social-media-app

  var mongoose = require('mongoose')
    , Schema = mongoose.Schema
  
  var userSchema = Schema({
    name    : String,
    posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  });
  
  var postSchema = Schema({
    title    : String,
    images   : [{ url: String, filename: String }]
  });
  
  var User  = mongoose.model('User', userSchema);
  var Post = mongoose.model('Post', postSchema);

  User.findOne().populate('posts').exec(function(error, user) {
  console.log(user.posts) // there are populated posts objects inside array
  })