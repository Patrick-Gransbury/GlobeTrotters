// Running on XAMP 8.1.2-0 + phpmyadmin

const express = require('express')
const util = require('util')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true}))

app.use(express.json())

var cors = require("cors");
app.use(cors({ origin: '*' }));

var con = mysql.createConnection({
    host: "dbhost.cs.man.ac.uk",
    database : '2021_comp10120_m9',
    user: "h13549so",
    password: "Fishing816123"
  });

async function getbool(){

}

// ask how to deal with changing variable inside callback
async function checkNewUser(data){

    let usernameCheck = "SELECT * FROM Users WHERE username = '"+data["username"] + "'"

    let usernameExists = false

    // username check
    con.query(usernameCheck, function(error, result, fields) {
        console.log("result length:" + result.length)
        if (error) throw error;
        if (result.length > 0) {
            console.log("USERNAME EXISTS!")
            usernameExists = true
        } else {
            console.log("USERNAME DOES NOT EXIST!")
        }
    });

    return {"usernameExists" : usernameExists}
}

function getMatches(data){
    let query = util.promisify(con.query).bind(con)
    let sql = "SELECT * FROM Users WHERE location_pref = '"+ data.destinationCountry + "' AND city_destination =  '" + data.cityDestination + "' AND transport = '" + data.transport + "';"
    console.log("SQL: " + sql)
    query(sql, function (err, result) {
        if (err) throw err;
        console.log("RESULT!! "+ JSON.stringify(result))
        return JSON.stringify(result)
    });
}

function addUserInfo(data){

    let sql = "INSERT INTO Users(first_name, last_name, email, password, age, nationality, phone_number, gender, username) VALUES('"+data.firstName+"','"+data.lastName+"', '"+data.emailAddress+"', '"+data.password+"', "+data.dob+", '"+data.nationality+"', "+data.phoneNumber+", '"+data.gender+"', '"+data.username+"');"
        console.log("Connected!");
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
        });
}

app.post('/api/login', function(req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    let username = req.body.username
    let password = req.body.password
    let sql = "SELECT * FROM Users WHERE username =" + "'"+username+"'"+ "AND password ="+ "'"+password+"'"

	if (username && password) {
		con.query(sql, function(error, result, fields) {
            console.log("RESULT: ",result)
			if (error) throw error;
			if (result.length > 0) {
                console.log("CASE 1")
                res.send({"login" : true, "username" : username})
			} else {
                console.log("CASE 2")
				res.send({"login" : false, "username" : username})
			}
            res.end()
		});
	} else {
        console.log("CASE 3")
		res.send({"login" : "Incorrect", "username" : username});
        res.end()
	}
    console.log(req.body)
});

app.post('/api/profilePic', function(req, res) {
    res.send("Hello")
    console.log(req.body.profilePic)
    addUserInfo(req.body)
    res.send("Data recieved: " + req.body.post)
});

app.post('/api/profileInfo', function(req, res) {

    let usernameCheck = "SELECT * FROM Users WHERE username = '"+req.body["username"] + "'"

    let usernameExists = false

    // username check
    con.query(usernameCheck, function(error, result, fields) {
        console.log("result length:" + result.length)
        if (error) throw error;
        if (result.length > 0) {
            console.log("USERNAME EXISTS!")
            res.send({"usernameExists" : true})
        } else {
            addUserInfo(req.body)
            res.send({"usernameExists" : false})

        }
    });

    // res.send("can you hear me?")

    // if(!checkObject["emailExists"] || !checkObject["usernameExists"]){
    //     addUserInfo(req.body)
    //     res.send({"status" : true})
    // }
    // else{
    //     res.send(checkObject)
    // }
    console.log(req.body)
});

app.post('/api/getUserInfo', function(req, res) {
    res.send("Hello")
    console.log(req.body.profilePic)
    addUserInfo(req.body)
    res.send("Data recieved: " + req.body.post)
});

app.get('/api/match/:destinationCountry/:cityDestination/:transport', function(req, res) {

    // console.log("function testing" + getMatches(req.body))

    data = {
        "destinationCountry" : req.params.destinationCountry,
        "cityDestination" : req.params.cityDestination,
        "transport" : req.params.transport
    }

    let sql = "SELECT * FROM Users WHERE location_pref = '"+ data.destinationCountry + "' AND city_destination =  '" + data.cityDestination + "' AND transport = '" + data.transport + "';"
    console.log("SQL: " + sql)
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("RESULT!! "+ JSON.stringify(result))
        if(result.length > 0){
            res.send(result)
        }
        else{
            res.send({"matches" : false})
        }
    });

    // let matches = getMatches(data)

    // console.log(matches)

    // if(matches.length > 0){
    //     res.send(matches)
    // }
    // else{
    //     res.send({"matches" : false})
    // }
});

app.get('/api/getUserDetails/:username', function(req, res) {

    let sql = "SELECT * FROM Users WHERE username = '" + req.params.username + "'"

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("RESULT!! "+ JSON.stringify(result))
        if(result.length > 0){
            res.send(result)
        }
        else{
            res.send({"status" : false})
        }
    });
});

app.listen(port, () => console.log(`Listen on port ${port}`))
