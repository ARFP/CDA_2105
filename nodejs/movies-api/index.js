
const express = require('express');

const app = express();
const router = express.Router(); 

var json = require(__dirname + '/movies.json');

// app.get('/', function(req, res) {

//     res.setHeader('Content-Type', 'application/json; charset=utf-8');

//     res.setHeader('X-toto', 'salut les copains');

//     res.end(JSON.stringify(json));
// });

//npm install nodemon -g 
//nodemon app.js pour lancer l'app

app.get('/movies', (req, res) => {
    res.json(json)
})

app.get('/movies/:id', (req, res) => {
    //recupérer la partie variable 
    let id = req.params.id
    //trouver le premier resultat pour un film avec cet id 
    let movie = json.data.find(m => m.movie_id == id)
    //renvoyer le resultat en json 
    res.json(movie)
})


app.listen(80);