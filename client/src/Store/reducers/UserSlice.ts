import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../Types/user";

interface UserState {
  currentUser?: UserType;
  users: UserType[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  currentUser: undefined,
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserType | undefined>) {
      state.currentUser = action.payload;
    },

    resetError(state) {
      state.error = "";
    },

    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<UserType>) {
      state.isLoading = false;
      state.error = "";
      state.currentUser = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.currentUser = undefined;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
