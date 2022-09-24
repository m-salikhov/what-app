import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TournamentType } from "../../Types/tournament";

interface TournamentState {
  title: string;
  tournaments: TournamentType[];
  tournament?: TournamentType;
}

const initialState: TournamentState = {
  title: "title",
  tournament: undefined,
  tournaments: [],
};

export const tournamentSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export default tournamentSlice.reducer;
