import React, {useState} from 'react';
import "./Constructor.css"
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {addConstructorPart} from "../../store/reducers/constructorReducer";
import {IPart} from "../../models/storeModels";
import ConstructorPart from "./ConstructorPart";

const Constructor = () => {
    const constructorParts = useAppSelector((state) => state.constructorParts.constructorParts);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsHovered(true);
    }

    function dragExitHandler() {
        setIsHovered(false);

    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, constructorParts: IPart[]) {
        e.preventDefault();
        const data: string = e.dataTransfer.getData("partName");
        dispatch(addConstructorPart(data));
        setIsHovered(false);
    }

    if (constructorParts.length > 0) {
        return (
            <div
                className="constructor"
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={() => dragExitHandler()}
                onDrop={(e) => dropHandler(e, constructorParts)}
            >
                {constructorParts.map((e: IPart, i: number) => {
                    return (
                        <ConstructorPart key={e.name} part={e} index={i}/>
                    )
                })}
                <div
                    className="drop_line"
                    style={isHovered ? {display: "block"} : {display: "none"}}
                />
            </div>
        )
    } else {
        return (
            <div
                style={isHovered ? {backgroundColor: "#F0F9FF"} : {backgroundColor: "white"}}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={() => dragExitHandler()}
                onDrop={(e) => dropHandler(e, constructorParts)}
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