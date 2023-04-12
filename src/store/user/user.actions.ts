import { AppThunk } from "..";
// import { setUser } from "./user.slice";

export const fetchUser = (): AppThunk => async (dispatch) => {
    const response = await fetch("api/user");
    const data = await response.json();
    // dispatch(setUser(data));
}