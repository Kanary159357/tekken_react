import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface User {
    photoURL: string | null;
    displayName: string | null;
    uid: string | null;
}

const initialState = {
    user: <User>{},
};

const userSlice = createSlice({
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        logoutUser(state) {
            state.user = <User>{};
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.userReducer,
            };
        },
    },
    name: 'user',
    initialState,
});
export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
