const http = require("http");
const express = require("express");
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const server = http.createServer(app)
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const projects = {
    RecipeApp: 'I made a simple front-end recipe site that gets data from an API and displays it in a card.',
    DribbbleDesign: 'I redesigned a site template found on dribbble using CSS',
    TamagatchiGame: 'I made a simple virtual pet game using Python.',
    HangmanGame: 'I made a simple hangman game using python',
    SageAdviceApp: "Team-made advice/joke/puppy picture app utilizing data from 3 API's"
}

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/projects', (req,res)=>{
    res.render('projects', {
        locals: {
            projects: Object.keys(projects)
        }
    })
})

app.get('/projects/:id', (req,res)=>{
    const {id} = req.params;
    res.render('proj', {
        locals: {
            title: id,
            details: projects[id]
        }
    })
})

server.listen(port,hostname, ()=>{
    console.log(`Running on http://${hostname}:${port}`)
})