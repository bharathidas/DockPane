# Dock Pane – Marketplace Documentation

Widget version 1.1.0 · Mendix Studio Pro 10.24.17 · Web (React client)

## Industry

All industries (cross-industry).

## Categories

- Widgets
- User Interface / Layout

## Component tagline

Slide-in panel for any page content: left, right, top or bottom of the window.

(78 characters)

## About

Dock Pane shows page content in a panel that slides in from the left, right, top or bottom of the browser window. The panel lies over the page, so it does not change the page layout, and it can dim the rest of the page while it is open. It is built on the react-dock library.

You place any widgets in the dock pane: text, forms, lists, filters or buttons. A Boolean attribute opens and closes it, so a button, a microflow or a nanoflow can control it. The position, size, dim mode and z-index also come from attributes and can change at runtime.

Version 1.1.0 is rebuilt for Mendix Studio Pro 10.24.17 and the React client. It fixes several problems of version 1.0.0: dim mode none works, the close button and a click on the dimmed page set the visibility attribute to false so the dock pane can be opened again, the z-index attribute is applied, and the class and style from Studio Pro are applied. The package is about 77 KB.

The source code is on GitHub: https://github.com/bharathidas/DockPane

## Typical usage scenario

- A details or edit panel next to a list.
- A filter panel that slides in over a dashboard.
- A help or notification panel.
- A settings panel or a shopping cart that opens from the side.
- A message bar at the top or bottom of the window.

## Features and limitations

**Features**

- Four positions: left, right, top and bottom.
- Open and close with a Boolean attribute; the close button and a click on the dimmed page set it to false.
- Three dim modes: none (page stays usable), transparent (page dimmed, clicks go through) and opaque (page dimmed, a click closes the dock pane).
- Size as a fraction of the window (fluid) or in pixels.
- Z-index from an attribute.
- Any Mendix widgets as content.
- On click action.
- CSS classes for the body, header, close button and content, so a theme can restyle the dock pane.
- Offline capable.

**Limitations**

- Web only; not available for native mobile.
- The settings are attributes; static values cannot be typed in the widget properties.
- The widget needs a context object, so it must be inside a data view or list view.
- Position and dim mode are String attributes; enumeration attributes cannot be selected.
- The user cannot resize the dock pane by dragging.
- The On click action also runs for clicks on widgets inside the dock pane.
- The animation and its duration are fixed.

## Dependencies

- Mendix Studio Pro 10.24.17 or a later 10.24 version.
- No other modules or libraries are needed.

## Installation

1. Download `mendix.DockPane.mpk` from the Marketplace (or from the GitHub release Version1.1.0).
2. Copy it into the `widgets` folder of your app (App > Show App Directory in Explorer).
3. In Studio Pro, press F4 (App > Synchronize App Directory).
4. The widget appears in the Toolbox as **Dock Pane**.

**Upgrading from 1.0.0:** replace the file in the `widgets` folder and press F4. Studio Pro reports that the widget definition changed; right-click the error and choose **Update all widgets**. Your settings are kept. If the running app still shows the old widget, choose App > Clean Deployment Directory and run the app again. Note that the visibility attribute now becomes false when the user closes the dock pane, and that dim mode none no longer dims the page.

## Configuration

1. Add a Boolean attribute for the visibility to your entity, for example `Visible`.
2. Optionally add attributes for the position (String: left, right, top, bottom), the dim mode (String: none, transparent, opaque), the size (Decimal or Integer), the z-index (Integer) and fluid (Boolean).
3. Place the widget in a data view of that entity. Its place in the page does not matter.
4. Drop the content into the widget.
5. Double-click the widget and select the attributes.
6. Open the dock pane by setting the visibility attribute to true, for example with a button that calls a nanoflow.

Size: with Fluid true (default) the size is a fraction of the window, for example 0.35. With Fluid false the size is in pixels, for example 400. The default is 0.35.

Z-index: without a z-index, or with a low value such as 1, the Atlas top bar stays above the dock pane. Use a higher value to lay the dock pane over the top bar.

## Known bugs

- With a low or empty z-index the dock pane has 48 pixels of empty space at the top (room for the Atlas top bar), also when the app has no top bar. Remove it with `.widget-dockpanel-body { padding-top: 0; }` in your theme.
- With Fluid true, a size above 1 makes the dock pane larger than the window.
- When the visibility attribute is read-only, the close button hides the dock pane but cannot change the attribute.

## FAQ

**How do I open the dock pane with a button?**
Let the button call a nanoflow or microflow that sets the visibility attribute to true.

**Why does the dock pane not open again after I closed it?**
In version 1.0.0 the attribute stayed true after closing. Upgrade to 1.1.0; closing now sets the attribute to false, so setting it to true opens the dock pane again.

**Why can I not click the page while the dock pane is open?**
The dim mode is opaque (the default). Use `none` to keep the page usable, or `transparent` to dim the page and let clicks through.

**Why is the dock pane behind the top bar, or why is there empty space at the top?**
No z-index or a low z-index is set. Set a higher z-index to lay the dock pane over the top bar, and remove the space with `.widget-dockpanel-body { padding-top: 0; }`.

**Why is my dock pane huge?**
Fluid is true and the size is a pixel value. Set Fluid to false, or use a fraction such as 0.35.

**Can I change the look of the header and the close button?**
Yes. Use the CSS classes `widget-dockpanel-header`, `widget-dockpanel-close` and `widget-dockpanel-content` in your theme.

**Does it work in older Mendix versions?**
Version 1.1.0 is built and tested for Studio Pro 10.24.17. Version 1.0.0 (GitHub release Version1.0.0) was made for Mendix 10.24.6.
