const express = require('express');
const app = express();
let mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ShadowWarrior2',   
    database: 'cruddatabase',
});

app.get('/', (req, res) =>{
    const sqlInsert = "INSERT INTO movie_review (id, movieName, movieReview) VALUES ('3', 'Inception', 'Good Movie');"
   
    db.query(sqlInsert, (err, result)=>{
        res.send("Hello wod");
    });
   
});

app.listen(3001, () => {
    console.log("running on port 3001");
});