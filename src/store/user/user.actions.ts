/**
 * todo: is this needed?
 * actions are part of reducer now.
 * 
 * use this file to create actions from reducer or have it part of services?
 */

import { AppThunk } from "..";
// import { setUser } from "./user.slice";

export const fetchUser = (): AppThunk => async (dispatch) => {
    const response = await fetch("api/user");
    const data = await response.json();
    // dispatch(setUser(data));
}