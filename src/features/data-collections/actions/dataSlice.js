import { createSlice } from '@reduxjs/toolkit';

// the data structure will be like this 
// {
//     name: '', 
//     ektp: '', 
//     address: '', 
//     job: '', 
//     birthDate: '', 
//     phoneNumber: [], 
//     relativePerson: []
// }


const initialState = {
    value: []
};

export const dataSlice = createSlice({
    name: 'data',
    initialState, 
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { add } = dataSlice.actions;

export default dataSlice.reducer;