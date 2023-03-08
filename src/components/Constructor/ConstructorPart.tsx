import React, {useState} from 'react';
import {
    addConstructorPartBefore,
    removeConstructorPart
} from "../../store/reducers/constructorReducer";
import {IPart} from "../../models/storeModels";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";

const ConstructorPart = ({part, index}:{part: IPart, index: number}) => {
    const isCalculatorActive = useAppSelector((state) => state.calculator.isActive);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault()
        e.stopPropagation();
        setIsHovered(true);
    }

    function dragExitHandler() {
            setIsHovered(false);

    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>){
        e.stopPropagation();
        e.preventDefault();
        const data: string = e.dataTransfer.getData("partName");
        dispatch(addConstructorPartBefore({name: data, position: index}))
        setIsHovered(false);
    }

    return (
        <div
            onDragOver={(e)=>dragOverHandler(e)}
            onDragLeave={()=>dragExitHandler()}
            onDrop={(e)=>dropHandler(e)}
        >
            <div
                className="drop_line"
                style={isHovered ? {display: "block"} : {display: "none"}}
            />
            <div
                onDoubleClick={isCalculatorActive ? ()=>{} : ()=>dispatch(removeConstructorPart(part.name))}
            >
                {part.Component()}
            </div>
        </div>
    );
};

export default ConstructorPart;