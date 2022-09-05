import { Editor } from './editors.entity';
import { Question } from './question.entity';
export declare class Tournament {
    id: number;
    title: string;
    date: string;
    tours: number;
    questions: Question[];
    editors: Editor[];
    dateUpload: string;
    uploaderUuid: string;
}
