import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CategoryList, FilterSliceState, Sort, SortPropertyEnum} from "./types";

import {Status, Vacancy} from "../vacancy/types";
import {fetchCategories} from "./asyncActions";

const initialState: FilterSliceState = {
    items: [],
    status: Status.LOADING,
    searchValue: '',
    categoryId: '0',
    paymentTo: '',
    paymentFrom: '',
    currentPage: 1,
    // sort: {
    //     name: '',
    //     sortProperty: SortPropertyEnum.PRICE_DESC
    // }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<CategoryList[]>) {
            state.items = action.payload;
        },
        setCategoryIdRedux(state, action: PayloadAction<string>) {
            state.categoryId = action.payload;
        },
        setSearchValueRedux(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        // setSort(state, action: PayloadAction<Sort>) {
        //     state.sort = action.payload;
        // },
        setCurrentPageRedux(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setPaymentFromRedux(state, action: PayloadAction<string>) {
            state.paymentFrom = action.payload;
        },
        setPaymentToRedux(state, action: PayloadAction<string>) {
            state.paymentTo = action.payload;
        },
        setFilters(state,action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                // state.sort = action.payload.sort;
                state.currentPage = Number(action.payload.currentPage);
                state.categoryId = String(action.payload.categoryId);
            } else {
                state.currentPage = 1;
                state.categoryId = '0';
                // state.sort = {
                //     name: 'популярности',
                //     sortProperty: SortPropertyEnum.RATING_DESC,
                // }
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
})

export const { setCategoryIdRedux, setCurrentPageRedux, setFilters, setSearchValueRedux, setPaymentFromRedux, setPaymentToRedux } = filterSlice.actions;

export default filterSlice.reducer;