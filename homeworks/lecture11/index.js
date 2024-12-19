const express = require('express');
const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');
const authRouter = require('./routers/auth');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/login', authRouter);
app.use('/api/companies', companyRouter);
app.use('/api/employees', employeeRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
