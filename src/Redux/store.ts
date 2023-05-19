import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import vacancy from "./vacancy/slice";
import favourites from "./favourites/slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        vacancy,
        filter,
        favourites
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

