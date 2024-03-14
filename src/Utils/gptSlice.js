import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
       showGptSearch : false,
    },
    reducers:{
        //actions
        toggleGptSearchView:(state,action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
    },
});


export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;

//add this slice to the store . 
