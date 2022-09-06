import { Editor } from './editors.entity';
import { Question } from './question.entity';
export declare class Tournament {
    id: number;
    title: string;
    date: string;
    tours: number;
    questionsQuantity: number;
    dateUpload: string;
    uploaderUuid: string;
    questions: Question[];
    editors: Editor[];
}
