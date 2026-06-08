import { ReactElement, createElement } from "react";

//import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { DockPaneInput, DockPaneInputProps } from "./components/DockPaneInput";
import { DockPanePreviewProps } from "../typings/DockPaneProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: DockPanePreviewProps): DockPaneInputProps {
    return {
        
        className: props.className,
        clickable: false,
        //style: parseInlineStyle(props.style),
       // content: props.content,
        
    };
}

export function preview(props: DockPanePreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <DockPaneInput {...transformProps(props)}></DockPaneInput>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/DockPane.css");
}
