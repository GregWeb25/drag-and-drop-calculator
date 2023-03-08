export interface IPart {
    name: string,
    Component: () => JSX.Element,
    isDraggable: boolean,
}

export interface IConstructorState {
    parts: IPart[],
    constructorParts: IPart[],
}

export interface  IAddConstructorPartBeforePayload {
    position: number,
    name: string,
}

export interface ICalculatorState {
    isActive: boolean,
    displayExpression: string,
}
