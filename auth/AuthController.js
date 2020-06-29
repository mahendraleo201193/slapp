exports.checkSignIn = (req, res,next) => {
    if(req.session.loggedin){
       next();     //If session exists, proceed to page
    } else {
       //next(err);  //Error, trying to access unauthorized page!
       res.status(500);
       res.send('Please login to view this page!');
    }
 };