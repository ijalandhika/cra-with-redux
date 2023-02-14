import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const relationshipStatus = {
    brother: 'BROTHER', 
    sister: 'SISTER', 
    parent: 'PARENT', 
    child: 'CHILD'
}


const initialState = {
    name: '', 
    ektp: '', 
    address: '', 
    job: '', 
    birthDate: '', 
    phoneNumber: [], 
    relativePerson: []
};


export const updateData = createSlice({
    name: 'personal',
    initialState, 
    reducers: {
        name: (state, action) => {
            state.name = action.payload;
        },
    }
});