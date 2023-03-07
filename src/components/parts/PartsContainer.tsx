import React from 'react';
import {IPart} from "../../store/reducers/constructorReducer";
import {useAppSelector} from "../../store/storeHooks";
import "./index.css"
import DraggableComponent from "./DraggableComponent";
const PartsContainer = () => {
    const parts: IPart[] = useAppSelector((state) => state.constructorParts.parts)
    return (
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