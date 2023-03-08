import React from 'react';
import {IPart} from "../../models/storeModels";
import {useAppSelector} from "../../store/storeHooks";
import "./index.css"
import DraggableComponent from "./DraggableComponent";
const PartsContainer = () => {
    const parts: IPart[] = useAppSelector((state) => state.constructorParts.parts)
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    if (isCalculatorActive){
        return (<div></div>)
    } else return (
        <div className="parts_container">
            {parts.map((part:IPart) => {
                return(
                    <DraggableComponent key={part.name} part={part}/>
                )
            })}
        </div>
    );
};

export default PartsContainer;