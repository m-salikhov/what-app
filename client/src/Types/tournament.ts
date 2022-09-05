import { QuestionType } from "./question";

export interface TournamentType {
  id?: number;
  title: string;
  date: string;
  tours: number;
  questions: QuestionType[];
  editors: string[];
  dateUpload: string;
  uploaderUuid: string;
}
