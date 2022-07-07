import { Router } from "express";
import { sendBattle } from "../controllers/battleController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

export const battleRouter = Router();

battleRouter.post("/battle", validateSchema(userSchema), sendBattle);