import { ReactElement, createElement, useCallback } from "react";

import { DockPaneContainerProps } from "../typings/DockPaneProps";
import { DEFAULT_SIZE, DockDimMode, DockPaneInput, DockPosition } from "./components/DockPaneInput";
import "./ui/DockPane.css";

function getPosition(position?: string): DockPosition {
    switch (position?.trim().toLowerCase()) {
        case "right":
            return "right";
        case "top":
            return "top";
        case "bottom":
            return "bottom";
        default:
            return "left";
    }
}

function getDimMode(mode?: string): DockDimMode {
    switch (mode?.trim().toLowerCase()) {
        case "none":
            return "none";
        case "transparent":
            return "transparent";
        default:
            return "opaque";
    }
}

export function DockPane(props: DockPaneContainerProps): ReactElement {
    const { positionKey, isVisibleKey, dimmodeKey, sizeKey, zIndexKey, fluidKey, contentKey, onClickAction } = props;

    const onClickHandler = useCallback(() => {
        if (onClickAction?.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    // Writes the closed state back, so that setting the attribute to true opens the dock pane again.
    const onClose = useCallback(() => {
        if (isVisibleKey?.status === "available" && !isVisibleKey.readOnly && isVisibleKey.value !== false) {
            isVisibleKey.setValue(false);
        }
    }, [isVisibleKey]);

    // Empty Integer and Decimal attributes arrive as 0, so zero and negative values are treated as not set.
    const sizeValue = Number(sizeKey?.value);
    const zIndexValue = Math.round(Number(zIndexKey?.value));

    return (
        <DockPaneInput
            position={getPosition(positionKey?.value)}
            isVisible={isVisibleKey ? isVisibleKey.value === true : true}
            dimMode={getDimMode(dimmodeKey?.value)}
            size={isFinite(sizeValue) && sizeValue > 0 ? sizeValue : DEFAULT_SIZE}
            zIndex={isFinite(zIndexValue) && zIndexValue > 0 ? zIndexValue : undefined}
            fluid={fluidKey?.value ?? true}
            content={contentKey}
            className={props.class}
            style={props.style}
            clickable={!!onClickAction}
            onClickAction={onClickHandler}
            onClose={onClose}
        />
    );
}
