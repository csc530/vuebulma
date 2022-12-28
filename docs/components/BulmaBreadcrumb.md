# BulmaBreadcrumb

[Bulma documentation](https://bulma.io/documentation/components/breadcrumb/)
[Component source](../../src/components/BulmaBreadcrumb.vue)

## Slots

### default

Template formatting of the breadcrumb items. The default is an `a` tag with the `href` attribute set to the `href`
property of the item.

## Props

### [rootTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `nav`

the tag to render as the breadcrumb's `ul` parent

### lastCrumbIsActive

Type: `boolean` | `undefined`

Default: `false`

Whether the last breadcrumb item should be active

### list

[//]: # (TODO: add a link to the type definition)
Type: `BreadcrumbItem[]`

List of items to render in the breadcrumb

### alignment

Type: `is-centered` | `is-right` | `is-left` | `undefined`

Default: `is-left`

the alignment of the breadcrumbs within its container

### separator

Type: `arrow` | `bullet` | `dot` | `succeeds` | `slash` | `undefined`

Default: `slash`

The separator to use between breadcrumbs;

### size

Type: [`BulmaSizes`](../types/common_types.md#bulmasizes) | `undefined`

Default: `default`

The size of the breadcrumbs
