import express from "express";
import routes from './routes/index.js';
import bodyParser from "body-parser";

// Initialize Express app and define routes
const app = express();


// Set up middleware for parsing JSON POST body
app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded POST body
app.use(express.json()); 

app.use('/', routes)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });