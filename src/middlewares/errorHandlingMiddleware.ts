import {Request, Response, NextFunction} from "express";

export async function errorHandling(error: any, req: Request, res: Response, next: NextFunction){
    if (error.type === "invalid") return res.status(422).send(error.message);
    if (error.type === "not found") return res.status(404).send(error.message);
    
    return res.sendStatus(500);
}