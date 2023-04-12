import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface UserState {
    user: User|null,
    loading: boolean,
    error: string|null
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = {
    fetchUserStart: (state: UserState) => {
        state.loading = true;
        state.error = null;
    },
    fetchUserSuccess: (state: UserState, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
    },
    fetchUserFailure: (state: UserState, action: PayloadAction<string>) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
    },
    updateUserStart: (state: UserState) => {
        state.loading = true;
    },
    updateUserSuccess: (state: UserState, action: PayloadAction<User>) => {
        state.user = { ...state.user, ...action.payload };
        state.loading = false;
        state.error = null;
    },
    updateUserFailure(state: UserState, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    },
    // Action for logging out user
    logoutUser: (state: UserState) => {
        state.user = null;
        state.loading = false;
        state.error = null;
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: userReducer
});

export const {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    logoutUser,
} = userSlice.actions;

export default userSlice.reducer;