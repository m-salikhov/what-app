import { Question } from '../entities/question.entity';
export declare class Tournament {
    title: string;
    date: string;
    tours: number;
    questions: Question[];
    editors: string[];
    dateUpload: string;
    uploaderUuid: string;
}
