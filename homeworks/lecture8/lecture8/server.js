const express = require('express');
const app = express();
const port = 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from Express 4.x!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
