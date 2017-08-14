import { Get, Route } from "tsoa";
import { Request, Response, NextFunction } from "express";

import { ResumeService } from "../service/resume.service";

@Route("Resume")
export class ResumeController {
    @Get()
    async getResume(): Promise<string> {
        console.log("getResume");
        return "getResume";
    }
}
