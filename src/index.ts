import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors"; 

import {errorHandling} from "./middlewares/errorHandlingMiddleware.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//TODO: fica em cima do errorHandling
app.use(errorHandling);

const PORT = +process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log("Server running on port " + PORT);
});