# BulmaColouredIcon

Represents an icon class with a colour

**object**

## Properties

- `icon`: [`string`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
	- The icon class
- `colour` [`BulmaColourHelper`](../types/common_types.md#bulmacolourhelper) | [`BulmaColour`](../types/common_types.md#bulmacolour) | [`undefined`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)
	- The colour of the icon

## BulmaMultiIcon

Represents a collection of icons for [Bulma Control](../components/form/BulmaFormInputs.md#bulmaformcontrol)

**object**

### Properties

#### icons

Type: `(BulmaColouredIcon | string)[]`

The icons to display

#### stacked

Type: `boolean` | `string`

Whether the icons should be stacked. If a string, the value will be used as the class for the stacked icon, prepended on
each icon.