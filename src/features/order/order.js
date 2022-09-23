import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeOrder } from "../../api/order";
import { getAddressByCoords } from "../../api/position";



export const getReverseGeocoding = createAsyncThunk('/order/position', async(coords) => {
    const responce = await getAddressByCoords(coords);
    return responce;
}) 

export const postDataFromForm = createAsyncThunk('/order/post', async(data) => {
    const responce = await makeOrder(data);
    return responce;
})

const initialState = {
    activeStep: 0,
    currentStep: 0,
    firstname: '',
    surname: '',
    tel: '',
    email: '',
    numberCard: '',
    holderCard: '',
    month: '',
    year: '',
    cvv: '',
    address: '',
    coords: [53.13, 50.11],
    isMake: false
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
            state.currentStep = action.payload;
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        setInfoFromForm: (state, action) => {
            const type = action.payload.type;
            state[type] = action.payload.info;
        },
        resetState: () => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getReverseGeocoding.fulfilled, (state, action) => {
                const {street, latLng} = action.payload;
                state.address = street;
                state.coords[0] = latLng['lat'];
                state.coords[1] = latLng['lng'];
            })
            .addCase(postDataFromForm.fulfilled, (state, action) => {
                state.isMake = !state.isMake;
            })
    }
})

export const { setActiveStep, setInfoFromForm, setCurrentStep, resetState } = orderSlice.actions;

export default orderSlice.reducer;