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
            const current = state.value || []; 
            current.push(action.payload);
            state.value = current;
        }
    }
});

export const { add } = dataSlice.actions;

export const datas = (state) => state.personalData.value;

export default dataSlice.reducer;