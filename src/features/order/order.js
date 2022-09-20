import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
    mainInfo: {
        firstname: '',
        surname: '',
        tel: '',
        email: ''
    },
    bankCard: {
        numberCard: '',
        holderCard: '',
        month: '',
        year: '',
        cvv: ''
    },
    address: '',
    coords: [53.13, 50.11]
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        }
    }
})

export const { setActiveStep } = orderSlice.actions;

export default orderSlice.reducer;