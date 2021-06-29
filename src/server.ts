import "reflect-metadata";
import express, { Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes/router";

import "./database";

const server = express();  

server.use(express.json());

server.use(router);

server.use((err: Error, request: Request, response: Response, next: NextFunction) => {  
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})


server.listen(3000,  ( )  =>  console.log("Server is running") ) ;