# Dock Pane
The DockPane widget is a modern, flexible docking panel solution built using React and powered by the lightweight react-dock library.

It enables developers to display contextual content, forms, dashboards, filters, notifications, and custom UI panels in dockable containers that can slide in from any side of the application. 

## Version 1.1.0 for Mendix Studio Pro 10.24.17

Dock Pane 1.1.0 is rebuilt for **Mendix Studio Pro 10.24.17** and the Mendix React client.

### Download

- Download `mendix.DockPane.mpk` from the release [Version1.1.0](https://github.com/bharathidas/DockPane/releases/tag/Version1.1.0) or from the root of this repository.
- Copy it into the `widgets` folder of your app and press **F4** (App > Synchronize App Directory) in Studio Pro.
- The previous package is in release [Version1.0.0](https://github.com/bharathidas/DockPane/releases/tag/Version1.0.0).

### Changes in 1.1.0

- Built with `@mendix/pluggable-widgets-tools` 10.16.0 for Studio Pro 10.24.17 and React 18, as a production build. The package is about 77 KB (1.0.0: about 129 KB).
- Dim mode `none` works. In 1.0.0 it was treated as `opaque`.
- The close button and a click on the opaque dim area set the visibility attribute to false. Setting the attribute to true opens the dock pane again. In 1.0.0 the attribute stayed true, so the dock pane could not be reopened.
- The zIndex attribute is applied (a whole number of 1 or more). When it is empty, no z-index is set, as in 1.0.0.
- Without a visibility attribute the dock pane is visible, as the description says. In 1.0.0 it stayed hidden.
- Position and dim mode ignore case and spaces, for example `Right` or `RIGHT `.
- An empty or zero size uses the default 0.35.
- The class and style set in Studio Pro are applied. The inline styles are now CSS classes (`widget-dockpanel-body`, `widget-dockpanel-header`, `widget-dockpanel-close`, `widget-dockpanel-content`), so a theme can override them.
- The close button has the label "Close" for screen readers.
- Studio Pro design mode shows a box with a drop zone for the content, instead of the real dock pane.
- Clearer property descriptions. The property keys are the same as in 1.0.0, so existing pages keep their settings.

Tested in a Mendix 10.24.17 app: open and close, reopening, click on the dim area, the four positions, the three dim modes, fluid and pixel size, and z-index.

### Upgrading from 1.0.0

1. Replace `mendix.DockPane.mpk` in the `widgets` folder of your app with the 1.1.0 file.
2. Press **F4** (Synchronize App Directory).
3. Studio Pro reports that the widget definition has changed. Right-click the error and choose **Update all widgets**. Your settings are kept.
4. If the running app still shows the old widget, stop it, choose **App > Clean Deployment Directory** and run it again.

Check after upgrading: if a microflow or nanoflow relied on the visibility attribute staying true after the user closed the dock pane, it now becomes false.

### Size and fluid

- Fluid true (default): the size is a fraction of the window, for example `0.35` for 35%.
- Fluid false: the size is in pixels, for example `400`.

### Source code and build

The widget source is in the [`dockPane`](dockPane) folder.

```
cd dockPane
npm install
npm run release
```

The package is created in `dockPane/dist/1.1.0/mendix.DockPane.mpk`. Node.js 16 or later is required.

---

## Features
## General Dock Features
•	Supports docking from multiple positions: 

###	Left

### Right 

###	Top 

###	Bottom 

•	Smooth slide-in and slide-out animations. 

•	Configurable dock size.

•	Overlay dimming support for focused user interactions. 

•	Lightweight and high-performance implementation using React widget. 

•	Supports displaying any Mendix content inside the dock panel. 

### Position: 
Position of the dock pane
### Visibility: 
is dock pane visible
### Dim Mode: 
If none - content is not dimmed, if transparent - pointer events are disabled (so you can click through it), if opaque - click on dim area closes the dock. Default is opaque.
### Size: 
Size of the dock pane.
### zIndex: 
zIndex of the dock pane.
### Fluid:
If true, resize dock proportionally on window resize.

## Demo:
https://dock-sandbox.mxapps.io/index.html?profile=Responsive

## Dependencies:
•	Mendix Studio Pro 10.24.17 (widget 1.1.0). Widget 1.0.0: Mendix modeler 10.24.6.

## Issues, suggestions and feature requests:
https://github.com/bharathidas/DockPane/issues

## Screenshots:

<img width="1365" height="646" alt="Screenshot_1" src="https://github.com/user-attachments/assets/73ecbd95-3e73-4203-b7c2-74d0adc16cce" />

<img width="598" height="701" alt="Screenshot_2" src="https://github.com/user-attachments/assets/aabbb9ff-bec4-4428-a333-bfc673d9021f" />
