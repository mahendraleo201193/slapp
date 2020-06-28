const dbConfig = require("../config/db.config.js");
var mysql = require('mysql');
exports.auth = (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    
    var connection = mysql.createConnection({
        host: dbConfig.HOST, // ip address of server running mysql
        user: dbConfig.USER, // user name to your mysql database
        password: dbConfig.PASSWORD, // corresponding password
        database: dbConfig.DB // use the specified database
    });

    if (username && password) {
        connection.connect(function(err){

            if(err){
                res.send('Mysql db connection failed !');
                return;
            }

            connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                console.log(results);
                console.log(error);
                console.log(fields);
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/home');
                } else {
                    res.send("Login Failed !");
                    //res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });

        });
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};