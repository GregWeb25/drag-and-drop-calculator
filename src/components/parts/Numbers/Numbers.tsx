import React from 'react';
import "./Numbers.css";
import CalculatorButton from "../../ui/CalculatorButton";
import {useAppDispatch, useAppSelector} from "../../../store/storeHooks";
import {addToExpression} from "../../../store/reducers/calculatorReducer";
const Numbers = () => {
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const numbers = ["1","2","3","4","5","6","7","8","9"]
    const dispatch = useAppDispatch()
    return (
        <div className="part_numbers">
            {numbers.map((e: string) => {
                return(
                    <CalculatorButton
                        key={e}
                        className="number_button"
                        value={e}
                        onClick={(e, value)=>{
                            dispatch(addToExpression(value))}}
                        isActive={isCalculatorActive}
                    ></CalculatorButton>
                )
            })}
            <CalculatorButton
                className="number_button_nul"
                value={"0"}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
            <CalculatorButton
                className="number_button"
                value={","}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
        </div>
    );
};

export default Numbers;