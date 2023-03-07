import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from "./reducers/constructorReducer";
export const store = configureStore({
    reducer: {
        constructorParts: constructorReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;