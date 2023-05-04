import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Vacancy, VacancySliceState, Status} from "./types";
import {fetchVacancies} from "./asyncActions";

const initialState: VacancySliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
}

const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Vacancy[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVacancies.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchVacancies.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchVacancies.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
})

export const { setItems } = vacancySlice.actions;

export default vacancySlice.reducer;