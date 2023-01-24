import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    languageList: "",
    specializationList: ""

}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        datepicker: (state) => { },
        language: (state, action) => {
            // state.languageCount += 1
            // console.log("action is : ", action);
            state.languageList = action.payload
            // console.log("the language list : ", state.languageList);
        },
        specialization: (state, action) => {
            state.specializationList = action.payload
            // console.log("special list iss ", state.specializationList)
        },
        time: (state) => { }

    }
})



// console.log("slice filter", filterSlice);

export const { datepicker, language, specialization, time } = filterSlice.actions
export default filterSlice.reducer