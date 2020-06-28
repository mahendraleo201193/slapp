var path = require('path');
exports.home = (req,res) => {
    
        if (req.session.loggedin) {
            //res.send('Welcome back, ' + req.session.username + '!');
            console.log("in home controller !")
            //res.sendFile(path.join(__dirname + '/../login.html'));
            res.set({
                'Access-Control-Allow-Origin' : '*'
            });
            return res.redirect('/public/home.html');
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
};