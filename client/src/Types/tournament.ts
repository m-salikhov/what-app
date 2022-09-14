import { QuestionType } from "./question";

export interface TournamentType {
  id?: number;
  title: string;
  date: number;
  tours: number;
  questionsQuantity: number;
  questions: QuestionType[];
  editors: string[];
  dateUpload: number;
  uploaderUuid: string;
}
