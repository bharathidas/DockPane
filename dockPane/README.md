## Dock Pane

Mendix pluggable widget that shows page content in a panel that slides in from the left, right, top or bottom of the window (react-dock). Version 1.1.0 is built for Mendix Studio Pro 10.24.17.

## Features

- Position from a String attribute: `left`, `right`, `top` or `bottom`.
- Visibility from a Boolean attribute; the close button and a click on the opaque dim area set it to false.
- Dim mode from a String attribute: `none`, `transparent` or `opaque`.
- Size, z-index and fluid from attributes.
- Any widgets as content.

## Usage

1. Copy `mendix.DockPane.mpk` into the `widgets` folder of your app and press **F4** in Studio Pro.
2. Place **Dock Pane** in a data view and drop the content into it.
3. Select a Boolean attribute for **is dock pane visible** and set it to true to open the dock pane.

## Issues, suggestions and feature requests

https://github.com/bharathidas/DockPane/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
1. Run `npm run release` to create the production package in `dist/1.1.0/mendix.DockPane.mpk`.
