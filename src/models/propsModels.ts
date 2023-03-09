import React from "react";
import {IPart} from "./storeModels";

export interface  ICalculatorButtonProps{
    onClick: (e: React.MouseEvent<HTMLButtonElement>, value: string) => void,
    value: string,
    className: string,
    isActive: boolean
}

export interface IConstructorPartProps{
    part: IPart,
    index: number
}