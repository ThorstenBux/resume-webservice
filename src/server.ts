import * as express from "express";
// https://www.npmjs.com/package/morgan
import * as logger from "morgan";
import * as bodyParser from "body-parser";

// https://www.npmjs.com/package/errorhandler
import * as errorHandler from "errorhandler";
// dotenv reads a configured .env file from a defined location and loads the values in process.env
import * as dotenv from "dotenv";


import { Request, Response, NextFunction } from "express";

import * as apiRouteHandler from "./routes/api.route";
import * as resumeRouteHandler from "./routes/resume.route";


const server = express();

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

/**
 * RouteHandler.
 */
server.get("/api", apiRouteHandler.getApi);
server.get("/api/resume", resumeRouteHandler.getResume);

server.use(logger("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/*
 * Error Handler. Provides full stack - remove for production
*/
server.use(errorHandler());


server.listen(process.env.PORT, () => {
    console.log("Server is running at PORT: %s env: %s", process.env.PORT, server.get("env"));
});
