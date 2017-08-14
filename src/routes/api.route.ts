import { Request, Response, NextFunction } from "express";

export let getApi = (req: Request, res: Response, next: NextFunction) => {
    console.log("get API");
    next();
};