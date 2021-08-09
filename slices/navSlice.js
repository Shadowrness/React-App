import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTrimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTrimeInformation: (state, action) => {
            state.travelTrimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTrimeInformation } = navSlice.actions;

//Selectors for
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTrimeInformation = (state) => state.nav.travelTrimeInformation;

export default navSlice.reducer;