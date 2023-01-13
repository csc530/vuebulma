# Types for [BulmaSelect](../components/form/BulmaSelect.md)

## BulmaOption

A single option for a select element.

**object**

### Properties

#### value

Type: `any`

Value of the option.

#### label

Type: `string`

Label of the option.

#### disabled

Type: `boolean` | `undefined`

When `true`, the option is disabled.

## BulmaOptionGroup

An optgroup with options for a select component.

**object**

### Properties

#### label

Type: `string`

Label of the optgroup.

#### options

Type: `(BulmaOption | string)[]` | `undefined`

The options for the optgroup.

If the options are strings, the value will be the same as the text.

#### disabled

Type: `boolean` | `undefined`

When `true`, the optgroup is disabled.