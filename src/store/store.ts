import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { tracksReducer } from "./features/tracksSlice";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            auth: authReducer,
            tracks: tracksReducer,
        }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore: () => AppStore = useStore;