import React from 'react';
import './index.css';
import {ICalculatorButtonProps} from "../../models/propsModels";

const CalculatorButton = ({onClick, value, className, isActive}:ICalculatorButtonProps) => {
    return (
        <button
            onClick={isActive ? (e)=>onClick(e, value) : ()=>{}}
            className={isActive ? "calculator_button " + className : className}
            style={isActive ? {cursor: "pointer"} : {cursor: "default"}}
        >
            {value}
        </button>
    );
};

export default React.memo(CalculatorButton);