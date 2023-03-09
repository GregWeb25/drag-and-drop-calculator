import React from 'react';
import './index.css'
import {IPart} from "../../models/storeModels";

const DraggableComponent = ({part}: {part: IPart }) => {

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, part: IPart){
        e.dataTransfer.setData("partName", part.name);

    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
    }

        return (
            <div
                className="draggable_component"
                style={part.isDraggable ? {opacity: 1} : {opacity: .5}}
                draggable={part.isDraggable}
                onDragStart={(e)=> dragStartHandler(e, part)}
                onDragOver={(e)=>dragOverHandler(e)}
            >
                {part.Component()}
            </div>
        );
};

export default  React.memo(DraggableComponent);