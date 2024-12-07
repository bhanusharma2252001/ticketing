import express, { NextFunction } from 'express';
import { json } from 'body-parser';

import { currrentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import mongoose from 'mongoose';

const app = express();
app.use(json());

app.use(signupRouter);
app.use(signinRouter);
app.use(currrentUserRouter);
app.use(signoutRouter);

app.all('*', (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.use(( err: any, req: any, res: any, next: NextFunction)=> {
  console.log("hhhlkdhfdshfkls");
  
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("db connected successfully!");

  } catch (error) {
    console.error(error)
  }
}
start();
app.listen(3000, () => {
  console.log('listening on port 3000!');

})
