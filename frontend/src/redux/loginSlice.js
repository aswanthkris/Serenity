import { createSlice } from '@reduxjs/toolkit'



const LOGIN_INITIALSTATE = {
    userList: []
}


const loginSlice = createSlice({
    name: "login",
    initialState: LOGIN_INITIALSTATE,
    reducers: {
        user: (state, action) => {
            console.log("user action is: ", action);

            state.userList = action.payload

            console.log("user state is :", state);
        },
        clearUser: (state, action) => {
            state.userList = false
        },
        userToken: (state, action) => {
            state.userList = action.payload
        }
    }
})


export const { user, clearUser } = loginSlice.actions
export default loginSlice.reducer
