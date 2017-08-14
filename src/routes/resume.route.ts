import { Request, Response, NextFunction } from "express";

export function getResume(req: Request, res: Response, next: NextFunction) {
    console.log("getResume");
    next();
}