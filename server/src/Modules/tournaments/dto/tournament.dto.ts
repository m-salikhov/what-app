import { Editor } from '../entities/editors.entity';
import { Question } from '../entities/question.entity';

export class Tournament {
  title: string;
  date: string;
  tours: number;
  questions: Question[];
  editors: string[];
  dateUpload: string;
  uploaderUuid: string;
}
