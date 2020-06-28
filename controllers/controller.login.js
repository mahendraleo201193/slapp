var path = require('path');

exports.login = (req,res) => {
    console.log("in login controller !")
    //res.sendFile(path.join(__dirname + '/../login.html'));
    res.set({
		'Access-Control-Allow-Origin' : '*'
	});
    return res.redirect('/public/login.html');
};