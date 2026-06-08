/**
 * This file was generated from DockPane.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface DockPaneContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    positionKey?: EditableValue<string>;
    isVisibleKey?: EditableValue<boolean>;
    dimmodeKey?: EditableValue<string>;
    sizeKey?: EditableValue<Big>;
    zIndexKey?: EditableValue<Big>;
    fluidKey?: EditableValue<boolean>;
    contentKey?: ReactNode;
    onClickAction?: ActionValue;
}

export interface DockPanePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    positionKey: string;
    isVisibleKey: string;
    dimmodeKey: string;
    sizeKey: string;
    zIndexKey: string;
    fluidKey: string;
    contentKey: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    onClickAction: {} | null;
}
