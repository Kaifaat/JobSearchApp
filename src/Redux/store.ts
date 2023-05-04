import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import vacancy from "./vacancy/slice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter,
        vacancy
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

