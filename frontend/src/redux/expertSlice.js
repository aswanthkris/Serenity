import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    experts: ''
}



const expertSlice = createSlice({
    name: "expert",
    initialState,
    reducers: {
        experts: (state, action) => {
            console.log("expert action is: ", action);

            state.experts = action.payload

            console.log("expert state is :", state);
        }
    }
})


export const { experts } = expertSlice.actions
export default expertSlice.reducer
