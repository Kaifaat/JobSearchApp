import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {geFavouritesFromLS} from "../../utils/getFavouritesFromLS";
import {FavouritesList, VacancyMainParams} from "../vacancy/types";

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
        },
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