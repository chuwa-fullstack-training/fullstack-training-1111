import {Router} from "express";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router() 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.send('this is the home page');
});

router.get('/about', (req, res) => {
    res.send('this is the about page');
});

router.get('/home.html', (req, res) => {
   

    fs.readFile(path.join(__dirname, '../home.html'), 'utf-8', (err, html) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            let message = ''
            if (req.query.name && req.query.age) {
                message = `<p>Submitted Name: ${req.query.name}, Age: ${req.query.age}</p>`;
            }
            const modifiedHtml = html.replace('<!--PLACEHOLDER-->', message);
            res.status(200).send(modifiedHtml)
        }
    });
});

router.post('/create-post', (req,res) =>{
    const {name, age} = req.body;
    console.log(name, age);  // To check the request body
    if (name && age){
        res.redirect(`/home.html?name=${name}&age=${age}`)
    }else{
        res.status(400).send('Please provide both name and age')
    }
})

export default router;

