import {RootState} from "../store";

export const selectFavourites = (state: RootState) => state.favourites;
export const selectFavouriteItemById = (id: string) => (state: RootState) => state.favourites.items.find((obj) => obj.id === id);
