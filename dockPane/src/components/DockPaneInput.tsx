import {
    ReactNode,
    ReactElement,
    Fragment,
    createElement,
    useState,
    useEffect
} from "react";

import classNames from "classnames";
import { Dock } from "react-dock";

import "../ui/DockPane.css";

export interface DockPaneInputProps {
    position?: "left" | "right" | "top" | "bottom";
    isVisible?: boolean;
    dimMode?: "none" | "transparent" | "opaque";
    size?: number;
    zIndex?: number;
    fluid?: boolean;
    content?: ReactNode;
    className?: string;
    clickable?: boolean;
    onClickAction?: () => void;
    getRef?: (node: HTMLDivElement | null) => void;
}

export function DockPaneInput(
    props: DockPaneInputProps
): ReactElement {
    const {
        position = "left",
        isVisible = true,
        dimMode = "transparent",
        size = 0.35,
        zIndex = 999999,
        fluid = true,
        content,
        className,
        clickable,
        onClickAction,
        getRef
    } = props;

    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    const atlasTopBarHeight = 48;

    return (
        <div
            ref={getRef}
            className={classNames(
                "widget-dockpanel",
                className,
                {
                    "widget-dockpanel-clickable": clickable
                }
            )}
            style={{
                width: "100%",
                height: "100%",
                position: "relative"
            }}
            onClick={onClickAction}
        >
            <Dock
                position={position}
                isVisible={visible}
                dimMode={dimMode}
                size={size}
                zIndex={zIndex}
                fluid={fluid}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#ffffff",
                        overflow: "hidden",
                        position: "relative",

                        ...(position !== "bottom"
                            ? {
                                  paddingTop:
                                      atlasTopBarHeight
                              }
                            : {})
                    }}
                >
                    <div
                        style={{
                            height: "36px",
                            minHeight: "36px",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            padding: "0 8px",
                            borderBottom:
                                "1px solid #ddd",
                            backgroundColor:
                                "#f5f5f5",
                            boxSizing:
                                "border-box"
                        }}
                    >
                        <button
                            type="button"
                            onClick={e => {
                                e.stopPropagation();
                                setVisible(false);
                            }}
                            style={{
                                width: "24px",
                                height: "24px",
                                border:
                                    "1px solid #ccc",
                                background:
                                    "#fff",
                                cursor:
                                    "pointer",
                                fontSize:
                                    "14px",
                                fontWeight:
                                    "bold",
                                padding: 0,
                                lineHeight:
                                    "22px"
                            }}
                        >
                            ×
                        </button>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            overflow: "auto",
                            padding: "12px",
                            boxSizing:
                                "border-box"
                        }}
                    >
                        {Array.isArray(content)
                            ? createElement(
                                  Fragment,
                                  {},
                                  ...content
                              )
                            : content}
                    </div>
                </div>
            </Dock>
        </div>
    );
}