import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TournamentShortType, TournamentType } from "../../Types/tournament";

interface TournamentState {
  tournamentShort: TournamentShortType;
  tournaments: TournamentType[];
  tournament?: TournamentType;
}

const initialState: TournamentState = {
  tournamentShort: {
    id: 0,
    title: "",
    uploaderUuid: "",
    dateUpload: 0,
  },
  tournament: undefined,
  tournaments: [],
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    setTournamentId(state, action: PayloadAction<TournamentShortType>) {
      state.tournamentShort = action.payload;
    },
  },
});

export default tournamentSlice.reducer;
