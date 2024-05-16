# VBulmaColumnGroup & VBulmaColumn

[Bulma documentation](https://bulma.io/documentation/columns/)

## VBulmaColumnGroup

Container for [VBulmaColumn](#VBulmacolumn)s for an even length of each column

### Slots

#### default

**[VBulmaColumn](#VBulmacolumn) components**.

### Props

#### [tag](../../types/common_types.md#tag)

Type: `string`

Default: `div`

#### gap

Type: `boolean` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `{breakpoint: number}`

Default: `true`

Controls The gap size between each column

- `true`: normal-sized gaps between each column
- `false`: no gaps between columns
- `number`: The gap size – the larger the number the larger the gap
- `object`: with a breakpoint key and a number value to set the gap size at a specific breakpoint
    - example: `{mobile: 1, tablet: 2, desktop: 3}`

#### isMultiline

Type: `boolean`

Default: `false`

If the columns should wrap/overflow to a new line

#### isVCentered

Type: `boolean`

Default: `false`

Center the child columns vertically

#### isCentered

Type: `boolean`

Default: `false`

Center child columns horizontally


#### responsive

Type: `BulmaMedia` | `BulmaMedia[]`

An array of or single string of the breakpoints at which the columns should be displayed horizontally (as columns).
[More information](https://bulma.io/documentation/columns/responsiveness/)

--- 

## VBulmaColumn

Container for content within a column

### Slots

#### default

Any content to display within the column

### Props

#### [tag](../../types/common_types.md#tag)

Type: `string`

#### size

Type:  `"full"` | `"4/5"` | `"3/4"` | `"2/3"` | `"3/5"` | `"half"` | `"2/5"` | `"1/3"` | `"quarter"` | `"1/5"` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8`| `9`| `10`| `11`| `12` | `{breakpoint: size}`

The size of the columns should occupy within its parent [column group](#VBulmacolumngroup). The larger the number the
greater
it's occupied space.

If an object is passed with a breakpoint key and a size value, the column will occupy that size at that breakpoint.
For example: `{mobile: 6, tablet: "full", desktop: "3/5"}`

[More information](https://bulma.io/documentation/columns/sizes/)

#### offset

Type:   `"full"` | `"4/5"` | `"3/4"` | `"2/3"` | `"3/5"` | `"half"` | `"2/5"` | `"1/3"` | `"quarter"` | `"1/5"` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8`| `9`| `10`| `11`| `12`

The offset (margin) from the left to move the column

[More information](https://bulma.io/documentation/columns/sizes/#offset)

#### isNarrow

Type: `boolean` | `BulmaMedia` | `BulmaMedia[]`

Default: `false`

If the column should only occupy the space needed to display it's content; to not be equal size with its siblings
Cannot be used with [`size`](#size).

If a `BulmaMedia` string or array is passed, the column will only be narrow at that (those) breakpoint(s).