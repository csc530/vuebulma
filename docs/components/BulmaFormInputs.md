# Forms and fields

Bulma provides a number of form elements that you can use to create forms. And fields of form inputs to group them
together.

[//]: # (This is by far the trickiest and most complex/difficult set of components to use, to have them displayed nicely as Bulma provides)

## BulmaFormControl

[Bulma documentation](https://bulma.io/documentation/form/general/#form-control)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormControl.vue)

A form input container to provide a consistent spacing and styling of form inputs elements.

### Slots

#### default

The form input to be enhanced.

### Props

#### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

The HTML tag to use for the form control.

#### isExpanded

*Requires [Control Group](#bulmaformcontrolgroup) parent and siblling control elements*

Type: `boolean` | `undefined`

Whether the form control and input should take up the full width of its container.

#### leftIcon

*Recommended to not colour icons*

Type: `string` | [BulmaColouredIcon](../types/BulmaColouredIcon.md) | [BulmaMultiIcon](../types/BulmaMultiIcon.md) | `undefined`

The icon to display on the left side of the form control.

#### rightIcon

*Recommended to not colour icons*

Type: `string` | [BulmaColouredIcon](../types/BulmaColouredIcon.md) | [BulmaMultiIcon](../types/BulmaMultiIcon.md) | `undefined`

The icon to display on the right side of the form control.

### Additional information

## BulmaFormControlGroup

[Bulma documentation](https://bulma.io/documentation/form/general/#form-group)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormControlGroup.vue)

An intermediary component to group form controls (BulmaFormControl) together.

### Slots

#### default

The form [controls](#bulmaformcontrol) to be grouped together.

### Props

#### hasAddons

Type: `boolean` | `undefined`

Whether the form controls should be grouped together as addons; appearing as a single input, each control connected to
the next.

#### alignment

Type: [BulmaAlignment](../types/common_types.md#bulmaalignment) | `undefined`

The alignment of the form controls within the group.

#### isMultiline

Type: `boolean` | `undefined`

Whether the form controls should be displayed on multiple lines.

_has no effect if used with `hasAddons`_

## BulmaFormField

[Bulma documentation](https://bulma.io/documentation/form/general/#form-field)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/groups/BulmaFormField.vue)

A simple container for a _single_ whole form input; built for a text label, a form control, and an optional help text

### Slots

#### default

The *single* form control

### Props

#### label

Type: `string` | `undefined`

The label for the form field.

#### help

Type: `string` | `undefined`

The help text for the form field.

#### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `div`

#### isGrouped

Type: `false` | [`BulmaAlignment`](../types/common_types.md#bulmaalignment)

make form controls [and all children] be inline (on the same line)

#### isMultiline

**Requires isGrouped**
Type: `boolean` | `undefined`

#### isHorizontal

Type: `boolean` | `undefined`

Displays the form field as horizontally

#### verticalSize

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

#### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`