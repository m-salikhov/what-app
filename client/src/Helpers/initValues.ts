import { TournamentType } from "../Types/tournament";
import { UserType } from "../Types/user";

export const initTournament: TournamentType = {
  title: "",
  date: 0,
  tours: 0,
  questionsQuantity: 0,
  questions: [],
  uploader: "",
  editors: [],
  dateUpload: 0,
  uploaderUuid: "",
};

export const initUser: UserType = {
  email: "",
  username: "",
  role: "user",
  password: "",
};
