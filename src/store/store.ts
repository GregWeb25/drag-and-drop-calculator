import {configureStore} from "@reduxjs/toolkit";
import constructorReducer from "./reducers/constructorReducer";
import calculatorReducer from "./reducers/calculatorReducer";
export const store = configureStore({
    reducer: {
        constructorParts: constructorReducer,
        calculator: calculatorReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;