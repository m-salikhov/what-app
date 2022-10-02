import { TournamentShortType } from "../../Types/tournament";

type FieldName = keyof Omit<TournamentShortType, "id">;

const sort = (arr: TournamentShortType[], fieldName: FieldName) => {
  arr.sort(function (a, b) {
    if (a[fieldName] > b[fieldName]) {
      return 1;
    }
    if (a[fieldName] < b[fieldName]) {
      return -1;
    }
    return 0;
  });
};

export const sortFunction = (arr: TournamentShortType[], fieldName: string) => {
  switch (fieldName) {
    case "title":
      sort(arr, fieldName);
      break;
    case "date":
      sort(arr, fieldName);
      break;
    case "questionsQuantity":
      sort(arr, fieldName);
      break;
    case "tours":
      sort(arr, fieldName);
      break;
    case "uploader":
      sort(arr, fieldName);
      break;
    case "dateUpload":
      sort(arr, fieldName);
      break;
    default:
      break;
  }
};
