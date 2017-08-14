import { Request, Response, NextFunction } from "express";

export let getApi = (req: Request, res: Response) => {
    console.log("get API");
    res.send("getApi");
};