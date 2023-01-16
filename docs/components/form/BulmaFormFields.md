# Forms and fields

Bulma provides a number of form elements that you can use to create forms. And fields of form inputs to group them
together.

## Recommendations and use

The [BulmaControl](#bulmaformcontrol) is used to wrap single form inputs or elements you'd like to place within
a `BulmaFormControlGroup`.

The [BulmaControlGroup](#bulmaformcontrolgroup) is used to wrap multiple `BulmaControl` components to group them
together. It may also be used to insert multiple controls within a single `BulmaFormField`.

The [BulmaFormField](#bulmaformfield) is to display a label, help text, and a _single_ `BulmaControl`
or `BulmaControlGroup` together.

## BulmaFormControl

[Bulma documentation](https://bulma.io/documentation/form/general/#form-control)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormControl.vue)

A form input container to provide a consistent spacing and styling of form inputs elements.

### Slots

#### default

The form input to be enhanced.

### Props

#### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

The HTML tag to use for the form control.

#### isExpanded

*Requires [Control Group](#bulmaformcontrolgroup) parent and sibling control elements*

Type: `boolean` | `undefined`

Whether the form control and input should take up the full width of its parent control group.

#### leftIcon

*Recommended to not colour icons*

Type: `string` | [BulmaColouredIcon](../../types/BulmaColouredIcon.md) | [BulmaMultiIcon](../../types/BulmaColouredIcon.md#bulmamultiicon) | `undefined`

The icon to display on the left side of the form control.

#### rightIcon

*Recommended to not colour icons*

Type: `string` | [BulmaColouredIcon](../../types/BulmaColouredIcon.md) | [BulmaMultiIcon](../../types/BulmaColouredIcon.md#bulmamultiicon) | `undefined`

The icon to display on the right side of the form control.
## BulmaFormControlGroup

[Bulma documentation](https://bulma.io/documentation/form/general/#form-group)
[Source](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormControlGroup.vue)

A container to group `BulmaFormControl`s together.

### Slots

#### default

The form [controls](#bulmaformcontrol) to be grouped together.

### Props

#### hasAddons

Type: `boolean` | `undefined`

Whether the form controls should be grouped together as addons; appearing as a single input, each control connected to
the next.

#### alignment

Type: [BulmaAlignment](../../types/common_types.md#bulmaalignment) | `undefined`

The alignment of the form controls within the group.

#### isMultiline

Type: `boolean` | `undefined`

Whether the form controls should be displayed on multiple lines.

_has no effect if used with `hasAddons`_

## BulmaFormField

[Bulma documentation](https://bulma.io/documentation/form/general/#form-field)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormField.vue)

A simple container for a _single_ whole form input; built for an optional label and help text, and form control(
s) ([`BulmaFormControlGroup`](#bulmaformcontrolgroup) or [`BulmaFormControl`](#bulmaformcontrol)).

### Slots

#### default

The *single* form control or form control group

### Props

#### label

Type: `string` | `undefined`

The label for the form field.

#### help

Type: `string` | `undefined`

The help text for the form field.

#### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `div`

#### isHorizontal

Type: `boolean` | `undefined`

Displays the form field horizontally

#### labelSize

Type: [`BulmaSize`](../../types/common_types.md#bulmasize) | `undefined`

The size of the label. Should correspond to the size of the form control(s).

#### labelFor

Type: `string` | `undefined`

The id of the form control(s) to associate the label with.
Necessary for accessibility with `isHorizontal` as the input is not a direct child of the label.