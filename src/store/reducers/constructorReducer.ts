import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Display from "../../components/parts/Display/Display";
import Operations from "../../components/parts/Operations/Operations";
import Numbers from "../../components/parts/Numbers/Numbers";
import Equality from "../../components/parts/Equality/Equality";


export interface IPart {
    name: string,
    Component: () => JSX.Element,
    isActive: boolean,
    isDraggable: boolean,
}

export interface IConstructorState {
    parts: IPart[],
    constructorParts: IPart[],
}

const initialParts: IPart[] = [
    {
        name: 'display',
        Component: Display,
        isActive: false,
        isDraggable: true,
    },
    {
        name: 'operations',
        Component: Operations,
        isActive: false,
        isDraggable: true,
    },
    {
        name: 'numbers',
        Component: Numbers,
        isActive: false,
        isDraggable: true,
    },
    {
        name: 'equality',
        Component: Equality,
        isActive: false,
        isDraggable: true,
    },
]

const initialState: IConstructorState = {
    parts: initialParts,
    constructorParts: [],
}

export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        addConstructorPart(state, action: PayloadAction<IPart>){
            state.parts.forEach(e => {
                if(e.name === action.payload.name){
                    action.payload.Component = e.Component;
                    e.isDraggable = false;
                    return e;
                } else  return e;
            });
            state.constructorParts.unshift(action.payload)
        },
        removeConstructorPart(state, action: PayloadAction<string>){
            state.constructorParts = state.constructorParts.filter(e => e.name !== action.payload);
            state.parts.forEach(e => {
                if(e.name === action.payload){
                    e.isDraggable = true;
                    return e;
                } else  return e;
            });
        }
    },
});

export const {addConstructorPart, removeConstructorPart} = constructorSlice.actions;
export default constructorSlice.reducer;