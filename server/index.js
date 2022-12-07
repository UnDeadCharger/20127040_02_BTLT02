const express = require("express");
const app = express();
let mysql = require('mysql2');

const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ShadowWarrior2',
    database: 'loginsystem',
});

/*app.get('/', (req, res) =>{
    const sqlInsert = "INSERT INTO users (id, movieName, movieReview) VALUES ('3', 'Inception', 'Good Movie');"
   
    db.query(sqlInsert, (err, result)=>{
        res.send("Hello wod");
    });
   
});*/

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM USERS WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({ err: err })
            }
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Wrong username/password" });
            }
        }
    );
})


app.listen(3001, () => {
    console.log("running on port 3001");
});