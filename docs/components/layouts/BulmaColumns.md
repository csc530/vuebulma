# vbColumnGroup & vbColumn

[Bulma documentation](https://bulma.io/documentation/columns/)

## vbColumnGroup

Container for [vbColumn](#vbcolumn)s for an even length of each column

### Slots

#### default

The vbColumns

### Props

#### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

#### gaps

Type: `boolean` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8`

Default: `true`

Controls The gap size between each column

- `true`: normal-sized gaps between each column
- `false`: no gaps between columns
- `number`: The gap size, the larger the number the larger the gap

#### breakpointGaps

Type: `Record<"mobile" | "tablet" | "desktop" | "widescreen" | "fullhd", boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>` | `undefinded`

tl;dr: `object{key = mediasize : boolean | 1...8}`

controls individual sizes for column gaps per breakpoint

#### isMultiline

Type: `boolean` | `undefinded`

If the columns should wrap to a new line

#### isVcentered

Type: `boolean` | `undefinded`

Center the child columns vertically

#### isCentered

Type: `boolean`| `undefinded`
Center child columns horizontally

## vbColumn

Container for content within a column

### Slots

#### default

Content to display within the column

### Props

#### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

###size

Type:  `full` | `4/5` | `3/4` | `2/3` | `3/5` | `half` | `2/5` | `1/3` | `quarter` | `1/5` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8`| `9`| `10`| `11`| `12`| `undefined`

The size the columns should occupy within it parent [column group](#vbcolumngroup). The larger the number the greater
it's occupied space.

[More information](https://bulma.io/documentation/columns/sizes/)

#### offset

Type:   `full` | `4/5` | `3/4` | `2/3` | `3/5` | `half` | `2/5` | `1/3` | `quarter` | `1/5` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8`| `9`| `10`| `11`| `12` | `undefined`

The offset (padding) from the left to move the column

[More information](https://bulma.io/documentation/columns/sizes/#offset)

#### isNarrow

Type: `boolean` | `undefined`

If the column should only occupy the space needed to display it's content; to not be equal size with its siblings

#### breakpoint

Type: `false` |`auto` | `mobile` | `tablet` | `desktop` | `widescreen` | `fullhd`

The screen size breakpoint to display the column vertically (displayed above or below its siblings)

_**However**, if `mobile` is chosen it **will** be displayed horizontally (columns are next to one another) on mobile
devices_