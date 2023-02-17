# vbTile

[Bulma documentation](https://bulma.io/documentation/layout/tiles/)

Create varied tiled layouts

## Slots

### Default

For another `vbTile` or content to render in a [child](#context) tile

## Props

### tag

Type: `string` | `undefined`

Default: `div`

### isVertical

Type: `boolean` | `undefined`

__requires child `vbTile` to take effect__

Whether to display children vertically, in a column, instead of horizontally, in a row

### size

Type: `half` | `full` | `1/4` | `1/3` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12` | `undefined`

Size for the tile to take up in the __12-column__ width grid

Unassigned tiles will share the remaining space equally

### context

Type: `ancestor` | `tile` | `child` | `parent`

Default: `tile`

The tile's role in the layout; A tile layout requires at least one `ancestor`, `parent`, and `child`

- `ancestor`: the root tile and should have **one** per tile layout
- `child`: the tile in which no more `vbTile` components will be placed within (for the same layout); will display
  content
- `parent`: contains only child tiles
- `tile`: none of the above-mentioned case; a tile that isn't the root a child (to display content), nor parent to child
  tiles. An in between middle tile

## box

Type: `boolean` | `undefined`

Give the tile a [boxed display](../elements/BulmaBox.md)