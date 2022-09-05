export declare class Question {
    type: 'regular' | 'double' | 'triple' | 'other';
    qNumber: number;
    tourNumber: number;
    add?: string;
    text: string;
    answer: string;
    alterAnswer?: string;
    comment?: string;
    author: string;
    source: string[];
}
