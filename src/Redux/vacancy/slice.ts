import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Vacancy, VacancySliceState, Status} from "./types";
import {fetchOneVacancy, fetchVacancies} from "./asyncActions";


const initialState: VacancySliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
    total: 0,
    item: {
        profession: 'string',
        firm_name: 'string',
        //town_title: 'string',
        catalogues_title: 'string',
        town: {
            title: 'string'
        },
        type_of_work: {
            title: 'string'
        },
        payment_to: 1000,
        payment_from: 1000,
        vacancyRichText: 'jjj',
        id: '12'
    }
}

const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Vacancy[]>) {
            state.items = action.payload;
        },
        setItem(state, action: PayloadAction<Vacancy>) {
            state.item = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVacancies.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchVacancies.fulfilled, (state, action) => {
            //@ts-ignore
            state.items = action.payload.objects;
            state.status = Status.SUCCESS;
            state.total = action.payload.total;
        })
        builder.addCase(fetchVacancies.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        })
        builder.addCase(fetchOneVacancy.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchOneVacancy.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.item = action.payload;
        })
        builder.addCase(fetchOneVacancy.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
})

export const { setItems } = vacancySlice.actions;

export default vacancySlice.reducer;