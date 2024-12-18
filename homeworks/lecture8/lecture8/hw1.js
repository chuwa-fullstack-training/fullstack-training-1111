/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const app = express();

// Routers
const hw1Router = require('./routers/hw1');
const hw2Router = require('./routers/hw2');

// Use hw1 router for paths starting with /hw1
app.use('/hw1', hw1Router);

// Use hw2 router for paths starting with /hw2
app.use('/hw2', hw2Router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
