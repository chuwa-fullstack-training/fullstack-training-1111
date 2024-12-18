import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import cors from 'cors';

// Initialize Express app and define routes
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
