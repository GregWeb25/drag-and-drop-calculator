import React from 'react';
import "./Equality.css";
import CalculatorButton from "../../ui/CalculatorButton";
import {useAppDispatch, useAppSelector} from "../../../store/storeHooks";
import {calculateExpression} from "../../../store/reducers/calculatorReducer";

const Equality = () => {
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const dispatch = useAppDispatch();
    return (
        <CalculatorButton
            className="equality_button"
            value={"="}
            onClick={(e, value)=>{
                dispatch(calculateExpression())}}
            isActive={isCalculatorActive}
        ></CalculatorButton>

    );
};

export default Equality;