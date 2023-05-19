import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {geFavouritesFromLS} from "../../utils/getFavouritesFromLS";
import {Vacancy, FavouritesList, VacancyMainParams} from "../vacancy/types";

const FavouritesData = geFavouritesFromLS();

const initialState: FavouritesList = {
    items: FavouritesData.items
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<VacancyMainParams>) {
            state.items.push(action.payload)
            // const findItem = state.items.find(obj => obj.id === action.payload.id);
            console.log(FavouritesData)
        },

        // minusItem(state, action: PayloadAction<string>) {
        //     const findItem = state.items.find(obj => obj.id === action.payload);
        //     if(findItem) {
        //         findItem.count--;
        //     }
        // },

        removeItem(state, action: PayloadAction<VacancyMainParams>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        },
        clearItems(state) {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, clearItems } = favouritesSlice.actions;

export default favouritesSlice.reducer;