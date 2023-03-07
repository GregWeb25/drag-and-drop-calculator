import React from 'react';
import "./Constructor.css"
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {addConstructorPart, IPart, removeConstructorPart} from "../../store/reducers/constructorReducer";
const Constructor = () => {
    const constructorParts = useAppSelector((state) => state.constructorParts.constructorParts);
    const dispatch = useAppDispatch();
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, constructorParts: IPart[]){
        e.preventDefault();
        const data: IPart = JSON.parse(e.dataTransfer.getData("part"));
        dispatch(addConstructorPart(data));
    }

    if(constructorParts.length > 0){
        return (
            <div
                className="constructor"
                onDragOver={(e)=>dragOverHandler(e)}
                onDrop={(e)=>dropHandler(e, constructorParts)}
            >
                {constructorParts.map((e:IPart) => {
                    return(
                        <div
                            onDoubleClick={()=>dispatch(removeConstructorPart(e.name))}
                            key={e.name}
                        >
                            {e.Component()}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div
                onDragOver={(e)=>dragOverHandler(e)}
                onDrop={(e)=>dropHandler(e, constructorParts)}
                className="constructor__empty"
            >
                <i className="bi bi-cloud-plus constructor_icon"></i>
                <h3>Перетащите сюда</h3>
                <span>любой элемент <br/> из левой панели</span>
            </div>
        );
    }
};

export default Constructor;