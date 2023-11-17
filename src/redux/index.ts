import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducet";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
    reducer:{
        counter:reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch:()=>RootDispatch = useDispatch;