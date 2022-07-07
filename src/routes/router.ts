import { Router } from "express";
import "express-async-errors"; 

import { userRouter } from "./userRouter.js"
import { battleRouter } from "./battleRouter.js";
import { errorHandling } from "../middlewares/errorHandlingMiddleware.js";

export const router = Router();

router.use(userRouter);
router.use(battleRouter);
router.use(errorHandling);