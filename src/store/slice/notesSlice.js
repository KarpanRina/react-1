import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arr: []
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState, 
    reducers: {
        addNote: (state, action) => {
            state.arr.push(action.payload)
        }
    }
})

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;



