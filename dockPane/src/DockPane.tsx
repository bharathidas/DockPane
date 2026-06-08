import {
    ReactElement,
    //CSSProperties,
    createElement,
    useCallback
} from "react";

import { DockPaneContainerProps } from "../typings/DockPaneProps";
import { DockPaneInput } from "./components/DockPaneInput";
import "./ui/DockPane.css";

type DockPosition = "left" | "right" | "top" | "bottom";
type DockDimMode = "none" | "transparent" | "opaque";

function getPosition(position?: string): DockPosition {
    switch (position) {
        case "right":
            return "right";

        case "top":
            return "top";

        case "bottom":
            return "bottom";

        case "left":
        default:
            return "left";
    }
}

function getDimMode(mode?: string): DockDimMode {
    switch (mode) {
        case "transparent":
            return "transparent";

        case "opaque":
            return "opaque";

        case "none":
        default:
            return "opaque";
    }
}

export function DockPane(props: DockPaneContainerProps): ReactElement {
    const {
        positionKey,
        isVisibleKey,
        dimmodeKey,
        sizeKey,
        zIndexKey,
        fluidKey,
        contentKey,
        onClickAction,
        //style
    } = props;

    const onClickHandler = useCallback(() => {
        if (onClickAction?.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);
    

    let sizeValue =  0.35;
    if(sizeKey?.value){
        sizeValue = Number(sizeKey.value);
    }
    
    let ZindexValue =  0.35;
    if(zIndexKey?.value){
        ZindexValue = Number(zIndexKey.value);
    }

    return (
        <DockPaneInput
            position={getPosition(positionKey?.value)}
            isVisible={isVisibleKey?.value|| false}
            dimMode={getDimMode(dimmodeKey?.value)}
            size={sizeValue}
            zIndex={ZindexValue}
            fluid={fluidKey?.value}
            content={contentKey}
            className={props.class}
            //style={style as CSSProperties}
            clickable={!!onClickAction}
            onClickAction={onClickHandler}
        />
    );
}