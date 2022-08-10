import { createSlice } from '@reduxjs/toolkit';
import { NOTES } from '../../app/assets/Resources/NOTES';

const initialState = {
    notesArray: NOTES
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            console.log('addNote action.payload:', action.payload);
            console.log('addNote state.notesArray:', state.notesArray);
            const newNote = {
                id: state.notesArray.length + 1,
                ...action.payload
            };
            state.notesArray.push(newNote);
        }
    }
});

export const notesReducer = notesSlice.reducer;

export const { addNote } = notesSlice.actions;

export const selectNotesByResource = (resource) => (state) => {
    return state.notes.notesArray.filter(
        (note) => note.resource === parseInt(resource.id)
    );
};