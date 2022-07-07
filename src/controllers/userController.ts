import {Request, Response} from "express";

import { userServices } from "../services/userService.js";

export async function getRanking(req: Request, res: Response){
    const ranking = await userServices.getRanking();
    
    res.status(200).send(ranking)
}