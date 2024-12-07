import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log("oh hello!");
    
    if (err instanceof CustomError) {
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
    } else {
        res.status(400).send({
            errors: [{ message: "Something went wrong" }],
        });
    }


};
