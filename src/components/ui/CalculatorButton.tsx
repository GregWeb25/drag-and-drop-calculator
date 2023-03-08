import React from 'react';
import './index.css';

const CalculatorButton = ({onClick, value, className, isActive}:{onClick: (e: React.MouseEvent<HTMLButtonElement>, value: string) => void, value: string, className: string, isActive: boolean}) => {
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

export default CalculatorButton;