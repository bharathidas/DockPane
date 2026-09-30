import { CSSProperties, ReactElement, ReactNode, createElement, useCallback, useEffect, useState } from "react";

import classNames from "classnames";
import { Dock } from "react-dock";

export type DockPosition = "left" | "right" | "top" | "bottom";
export type DockDimMode = "none" | "transparent" | "opaque";

export const DEFAULT_SIZE = 0.35;

export interface DockPaneInputProps {
    position: DockPosition;
    isVisible: boolean;
    dimMode: DockDimMode;
    size: number;
    /** Not set: the dock pane gets no z-index, as in version 1.0.0. */
    zIndex?: number;
    fluid: boolean;
    content?: ReactNode;
    className?: string;
    style?: CSSProperties;
    clickable?: boolean;
    onClickAction?: () => void;
    onClose?: () => void;
}

export function DockPaneInput(props: DockPaneInputProps): ReactElement {
    const { position, isVisible, dimMode, size, zIndex, fluid, content, className, style, clickable, onClickAction } =
        props;
    const { onClose } = props;

    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    const close = useCallback(() => {
        setVisible(false);
        onClose?.();
    }, [onClose]);

    return (
        <div
            className={classNames("widget-dockpanel", className, { "widget-dockpanel-clickable": clickable })}
            style={style}
            onClick={onClickAction}
        >
            <Dock
                position={position}
                isVisible={visible}
                dimMode={dimMode}
                size={size}
                // react-dock falls back to its own very high z-index for undefined, "auto" keeps the 1.0.0 stacking.
                zIndex={zIndex ?? ("auto" as unknown as number)}
                fluid={fluid}
                onVisibleChange={nowVisible => {
                    if (!nowVisible) {
                        close();
                    }
                }}
            >
                <div className={classNames("widget-dockpanel-body", `widget-dockpanel-${position}`)}>
                    <div className="widget-dockpanel-header">
                        <button
                            type="button"
                            className="widget-dockpanel-close"
                            aria-label="Close"
                            onClick={e => {
                                e.stopPropagation();
                                close();
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <div className="widget-dockpanel-content">{content}</div>
                </div>
            </Dock>
        </div>
    );
}
