import React from 'react';
import './index.css'
import {IPart} from "../../store/reducers/constructorReducer";

const DraggableComponent = ({part}: {part: IPart }) => {

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, part: IPart){
        e.dataTransfer.setData("part", JSON.stringify(part));

    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>, part: IPart){
        e.preventDefault();
        if(part.isActive){
            console.log("drop: "+part);
        }
    }

    return (
        <div
            className="draggable_component"
            style={part.isDraggable ? {opacity: 1} : {opacity: .5}}
            draggable={part.isDraggable}
            onDragStart={(e)=> dragStartHandler(e, part)}
            onDragOver={(e)=>dragOverHandler(e)}
            onDrop={(e)=>dropHandler(e, part)}
        >
            {part.Component()}
        </div>
    );
};

export default DraggableComponent;