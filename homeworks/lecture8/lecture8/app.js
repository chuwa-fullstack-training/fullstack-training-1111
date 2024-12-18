const express = require('express');
const app = express();

 const hw1Router = require('./routers/hw1');
const hw2Router = require('./routers/hw2');

 app.use('/hw1', hw1Router);

 app.use('/hw2', hw2Router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});




// const express = require('express');
// const app = express();

// const hw2Router = require('./hw2'); 
// app.use('/hw2', hw2Router);

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
