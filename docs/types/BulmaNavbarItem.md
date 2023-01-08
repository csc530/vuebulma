# BulmaNavbarItem

Help to render item in a [navbar](../components/BulmaNavbar.md).

**object**

## Properties

### type

Type: `'simple'` | `'dropdown'` | `'component'` | `'html'`

The content that will be rendered in the navbar item

### display

Type: `string` | `Component` | `HTMLElement`

The content that will be rendered in the navbar item

### link

_Requires the [item tag](../components/BulmaNavbar.md#startitemtag) to be `a` to be used as its `href`_

Type: `string` | `undefined`

The link that will be used for the navbar item

### isExpanded

Type: `boolean` | `undefined`

Whether the navbar item can be expanded if there's available space

### isActive

Type: `boolean` | `undefined`

Whether the navbar item is active

---
__[type](#type) = `dropdown`__

### dropdown

Type: `object` | `undefined`

Dropdown's items and styles

#### items

Type: `any[]`

_Recommended type `BulmaNavbarItem[]`_

The dropdown's items

#### isArrowless

Type: `boolean` | `undefined`

Whether the dropdown should have an arrow

#### isBoxed

Type: `boolean` | `undefined`

Whether the dropdown should be a boxed style

#### isDropUp

Type: `boolean` | `undefined`

Whether the dropdown should open upwards

#### isHoverable

Type: `boolean` | `undefined`

Whether the dropdown should open on hover

#### isRight

Type: `boolean` | `undefined`

Whether the dropdown aligns its items to the right

---
__[type](#type) = `component`__

### props

Type: `Record<string, any>` | `undefined`

The props that will be passed to the component.

The key will be the prop name and the value will be the prop value

### slot

Type: `Record<string, string>` | `undefined`

The slots that will be passed to the component.

The key will be the slot name and the value will be the slot content, _html or component templates will not be parsed_

Consider using slot templates instead of passing in html or components.