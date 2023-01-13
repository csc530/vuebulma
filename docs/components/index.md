# Common attributes

As of right now all components are built using the composition API using the `script setup` syntax with TypeScript.
Because of this, component props and data are all private and cannot
be [accessed from component](https://vuejs.org/api/sfc-script-setup.html#defineexpose) ref.

The following attributes are common to all components:

## Slots

When a component has a slot any related item will be bound to `data` on the slot.

## Props

All required props are marked with `*`.

[//]: # (todo: mark all required props)

If no default is presented, it's value is `undefined`.