import React from 'react';
import "./Display.css"
import {useAppDispatch, useAppSelector} from "../../../store/storeHooks";
import {setExpressionEmpty} from "../../../store/reducers/calculatorReducer";
const Display = () => {
    let expression: string = useAppSelector((state) => state.calculator.displayExpression);
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const dispatch = useAppDispatch();
    if(expression.length === 0){
        expression = "0";
    }
    if(expression === "Err"){
        setTimeout(()=> {
            dispatch(setExpressionEmpty());

        },1000);
    }
    return (
        <div className="part_display_container">
            <div className="display">
                <div className="display_content">
                    {isCalculatorActive ? expression : '0'}
                </div>
            </div>
        </div>
    );
};

export default Display;