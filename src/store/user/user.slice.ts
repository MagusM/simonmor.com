import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: User = {
    name: '',
    email: '',
    password: '',
    lastLogin: null
}

const userReducer = {
    setUser: (state: User, action: PayloadAction<User>) => {
        state = action.payload;
    },
    setName: (state: User, action: PayloadAction<string>) => {
        state.name = action.payload;
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: userReducer
});

export const {
    setUser
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.name;
export default userSlice.reducer;