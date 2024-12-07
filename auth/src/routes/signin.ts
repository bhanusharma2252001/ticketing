import express, { Request, Response } from 'express';
import {body} from 'express-validator'

const router = express.Router();

router.get('/api/users/signin',  (req: Request, res: Response) => {
   const { email, password } = req.body;

}) 

export { router as signinRouter };