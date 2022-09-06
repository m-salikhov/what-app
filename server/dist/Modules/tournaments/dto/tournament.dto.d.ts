import { QuestionDto } from './question.dto';
export declare class TournamentDto {
    id?: number;
    title: string;
    date: string;
    questionsQuantity: number;
    tours: number;
    questions: QuestionDto[];
    editors: string[];
    dateUpload: string;
    uploaderUuid: string;
}
export declare class getTournametDto {
    title?: string;
    date?: string;
    editor?: string;
    maxDateUpload?: string;
    minDateUploader?: string;
}
