import { Get, Route } from "tsoa";
import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { provideSingleton } from "../inversify/ioc";

import { ResumeService } from "../service/resume.service";
import { Resume } from "../model/resume";

@Route("Resume")
// @provideSingleton(ResumeController)
@provideSingleton(ResumeController)
export class ResumeController {
    // Injection objects is possible without the @inject decorator because TS exports the needed metadata automatically when we use 'reflect-metadata'
    constructor(private resumeService: ResumeService) { }
    @Get()
    async getResume(): Promise<string> {
        return this.resumeService.getResumeData().then(
            async resume => {
                return await JSON.stringify(resume);
            });
    }

    @Get("topics")
    async getResumeTopics(): Promise<string> {
        console.log("getResumeTopics");
        return this.resumeService.getTopLevelResumeData().then(
            async resumeTopLevel => {
                return await JSON.stringify(resumeTopLevel);
            });
    }

    @Get("{identifier}")
    async getResumeDetail(identifier: string): Promise<string> {
        return this.resumeService.getResumeDetail(identifier).then(
            async resumeDetail => {
                return await JSON.stringify(resumeDetail);
            });
    }
}
