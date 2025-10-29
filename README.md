# JSON Tree Visualizer

Interactive JSON Tree Visualizer built with React + Vite and React Flow.

## Features

-   Paste or type JSON and click Visualize
-   Validates JSON and shows helpful errors
-   Tree visualization using React Flow:
    -   Objects, Arrays, Primitives rendered as nodes with distinct colors
    -   Parent-child connectors
-   Search by JSONPath (e.g., `$.user.address.city`, `items[0].name`)
    -   Highlights the matching node and pans/zooms to it
    -   Displays "Match found" / "No match found"
-   Interactivity
    -   Zoom controls, pan canvas by drag or scroll
    -   Hover nodes for path/value (via label); copy path by clicking a node
    -   Clear / Reset and Load Sample buttons
    -   Light / Dark mode toggle
    -   Download tree as PNG image


## Tech Stack

-   React + Vite
-   React Flow (for the visualization)
-   No other visualization libraries

## Local Development

1.  Install Node.js (v18+ recommended).
2.  Install dependencies:

```powershell
npm install
```

3.  Run the dev server:

```powershell
npm run dev
```

4.  Open the printed local URL (typically [http://localhost:5173](http://localhost:5173)).

## JSONPath Support

This app supports a practical subset of JSONPath:

-   Optional `$` root
-   Dot notation for keys: `a.b.c`
-   Array indexes: `[0]`, `[1]`, ...

Examples:

-   `$.user.address.city`
-   `items[0].name`

## Notes

-   Layout is a custom tree layout (no external libs) with parent nodes centered over children.
-   Node IDs correspond to paths like `$`, `$.user`, `$.user.name`, `$.items[0]`, etc. Clicking a node copies this path.