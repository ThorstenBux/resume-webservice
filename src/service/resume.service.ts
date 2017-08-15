import { injectable, Container } from "inversify";
import { makeFluentProvideDecorator } from "inversify-binding-decorators";

import "reflect-metadata";

import { Resume } from "../model/resume";
import { resume_data } from "../mock-resume";
import { provideSingleton } from "../inversify/ioc";

@provideSingleton(ResumeService)
export class ResumeService {
    getResumeData(): Promise<Resume> {
        return Promise.resolve(resume_data);
    }

    getTopLevelResumeData(): Promise<string[]> {
        return this.getResumeData().then(resume_data => {
            console.log("getTopLevelResumeData" + Object.keys(resume_data));
            return Object.keys(resume_data);
        });
    }

    getResumeDetail(identifier: string): Promise<any> {
        console.log("ResumeService identifier: " + identifier);
        return this.getResumeData().then(resume_data => resume_data[identifier]);
    }
}