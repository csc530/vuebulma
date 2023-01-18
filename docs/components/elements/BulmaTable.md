# vbTable

[Bulma documentation](https://bulma.io/documentation/elements/table/)

A table

## Slots

- default
- header
- footer

Each of these slots are used to format their `td` elements within them. Their item is bound to the `data` property on the slot

### table

Embed direct table [content], i.e. `tbody`, `tr`,`td`, etc. Do not include `table` tag as it's applied in the `vbTable` component.

## Props

### scrollable

Type: `boolean` | `undefined`

Whether to wrap the table in a container allowing it to have overflow content

### header

Type: `any[][]` | `undefined`

Items to display in the table heading

### items

Type?: `any[][]`

Main table content

### footer

Type:  `any[][]` | `undefined`

Items to display in the table footer

### isBordered

Type: `boolean` | `undefined`

Whether to style the table data with full borders

### isStriped

Type: `boolean` | `undefined`

Whether to style the table with alternating backgrounds

### isNarrow

Type: `boolean` | `undefined`

Whether to style the table with smaller spaces around items

### isHoverable

Type: `boolean` | `undefined`

Whether to style the hovered row

### isFullwidth

Type: `boolean` | `undefined`

Whether the table should expand to the width of its parent

## Additional information

When using `items`, `header` and `footer` props it uses a 2-dimensional array where the each sub-array represents a row.

for example

```javascript
const example = [
 ['a', 'b', 'c',],
 [1,2,3]
];
```

The `example` array will create 2 rows. The first row will contain `a`, `b`, `c`, and the second row will contain `1`, `2`, `3`.
