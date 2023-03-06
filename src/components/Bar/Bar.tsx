import React from 'react';
import "./Bar.css"
const Bar = () => {
    return (
        <div className="bar">
            <div className="bar_btn">
                <div><i className="bi bi-eye bar_icon"></i></div>
                <span className="bar_btn_text">Runtime</span>
            </div>
            <div className="bar_btn__active">
                <div>
                    <i className="bi bi-code bar_icon"></i>
                </div>
                <span className="bar_btn_text">Constructor</span>
            </div>
        </div>
    );
};

export default Bar;