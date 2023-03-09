import {ICalculatorState} from "../../models/storeModels";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ICalculatorState = {
    isActive: false,
    displayExpression: '',
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setActiveFalse(state){
         state.isActive = false;
        },
        setActiveTrue(state){
            state.isActive = true;
        },
        addToExpression(state, action: PayloadAction<string>){
            if (state.displayExpression.length < 9) {
                state.displayExpression += action.payload.toLowerCase();
            }
        },
        calculateExpression(state){
            try{
                let expression = String(state.displayExpression);
                if(expression.length > 0){
                    expression = expression.replace("x",'*');
                    expression = expression.replace(",",'.');
                    expression = String(eval(expression));
                    expression = expression.replace(".",',');
                    if(String(expression).length > 8){
                        expression = expression.substring(0,8);
                    }
                    state.displayExpression = expression;
                }
            } catch (e) {
                state.displayExpression = "Err";
            }
        },
        setExpressionEmpty(state){
            state.displayExpression = "";
        }
    }
})

export const {setActiveTrue, setActiveFalse, addToExpression, calculateExpression, setExpressionEmpty} = calculatorSlice.actions;

export default calculatorSlice.reducer;