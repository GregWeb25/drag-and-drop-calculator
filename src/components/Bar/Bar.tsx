import React from 'react';
import "./Bar.css"
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {setActiveTrue, setActiveFalse} from "../../store/reducers/calculatorReducer";
const Bar = () => {
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const dispatch = useAppDispatch();
    return (
        <div className="bar">
            <div
                className={ isCalculatorActive ? "bar_btn__active" : "bar_btn"}
                onClick={()=>dispatch(setActiveTrue())}
            >
                <div><i className="bi bi-eye bar_icon"></i></div>
                <span className="bar_btn_text">Runtime</span>
            </div>
            <div
                className={ isCalculatorActive ? "bar_btn" : "bar_btn__active"}
                style={{width: 133}}
                onClick={()=>dispatch(setActiveFalse())}
            >
                <div>
                    <i className="bi bi-code bar_icon"></i>
                </div>
                <span className="bar_btn_text">Constructor</span>
            </div>
        </div>
    );
};

export default Bar;