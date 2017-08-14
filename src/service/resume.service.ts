import { Resume } from "../model/resume";
import { resume_data } from "../mock-resume";


export class ResumeService {
    getResume(): Promise<Resume> {
        return Promise.resolve(resume_data);
    }
}