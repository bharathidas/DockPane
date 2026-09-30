import { ReactElement, createElement } from "react";

import { DockPanePreviewProps } from "../typings/DockPaneProps";

// The real dock pane is fixed to a side of the window and would cover the page editor, so design mode
// shows it as a box in the page flow with a drop zone for the content.
export function preview(props: DockPanePreviewProps): ReactElement {
    const Content = props.contentKey.renderer;

    return (
        <div className={`widget-dockpanel-preview ${props.class}`} style={props.styleObject}>
            <div className="widget-dockpanel-header">
                <span>Dock Pane</span>
                <span className="widget-dockpanel-close">×</span>
            </div>
            <Content caption="Content of the dock pane">
                <div className="widget-dockpanel-preview-content" />
            </Content>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/DockPane.css");
}
