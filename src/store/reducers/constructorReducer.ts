import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Display from "../../components/parts/Display/Display";
import Operations from "../../components/parts/Operations/Operations";
import Numbers from "../../components/parts/Numbers/Numbers";
import Equality from "../../components/parts/Equality/Equality";
import {IAddConstructorPartBeforePayload, IPart} from "../../models/storeModels";
import {IConstructorState} from "../../models/storeModels";


const initialParts: IPart[] = [
    {
        name: 'display',
        Component: Display,
        isDraggable: true,
    },
    {
        name: 'operations',
        Component: Operations,
        isDraggable: true,
    },
    {
        name: 'numbers',
        Component: Numbers,
        isDraggable: true,
    },
    {
        name: 'equality',
        Component: Equality,
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
        addConstructorPart(state, action: PayloadAction<string>){
            state.parts.forEach(e => {
                if(e.name === action.payload){
                    state.constructorParts.push(e)
                    e.isDraggable = false;
                    return e;
                } else  return e;
            });
        },
        addConstructorPartBefore(state, action: PayloadAction<IAddConstructorPartBeforePayload>){
            state.parts.forEach(e => {
                if(e.name === action.payload.name){
                    state.constructorParts.splice(action.payload.position, 0, e);
                    e.isDraggable = false;
                    return e;
                } else  return e;
            });
        },
        removeConstructorPart(state, action: PayloadAction<string>){
            state.constructorParts = state.constructorParts.filter(e => e.name !== action.payload);
            state.parts.filter(e => {
                if(e.name === action.payload){
                    e.isDraggable = true;
                    return e;
                } else  return e;
            });
        }
    },
});

export const {addConstructorPart, removeConstructorPart, addConstructorPartBefore} = constructorSlice.actions;
export default constructorSlice.reducer;