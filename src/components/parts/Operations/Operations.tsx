import React from 'react';
import "./Operations.css";
import CalculatorButton from "../../ui/CalculatorButton";
import {useAppDispatch, useAppSelector} from "../../../store/storeHooks";
import {addToExpression} from "../../../store/reducers/calculatorReducer";

const Operations = () => {
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const dispatch = useAppDispatch();
    return (
        <div className="part_operations">
            <CalculatorButton
                className="operation_button"
                value={"/"}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
            <CalculatorButton
                className="operation_button"
                value={"X"}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
            <CalculatorButton
                className="operation_button"
                value={"-"}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
            <CalculatorButton
                className="operation_button"
                value={"+"}
                onClick={(e, value)=>{
                    dispatch(addToExpression(value))}}
                isActive={isCalculatorActive}
            ></CalculatorButton>
        </div>
    );
};

export default Operations;