# Overview

The types and helper functions found throughout are used to simplify development and types used by components. Many of
the types and functions are exported for use and are recommended to use in conjunction with the components especially if
building with Typescript.

[//]: # (## Types variants || types of types || Classification || Index/glossary of types)

I highly recommend setting the [`tag` prop](../) whenever possible to reduce the amount of [
*non-semantic*](https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html) `div` tags in your
HTML.

## Types

These are type aliases for simple class options or interfaces for more complex class lists for components.

### Helpers

Define types/interfaces that wrap Bulma options or common classes/features of components.

### Interfaces

Usually a wrapper of a simpler types used in conjunction to form a more complex series of Bulma classes

## Functions

The following functions are side effects free but lack use outside the component SFC use with discretion as they are
specialized for their related SFC component within the package. Use not recommended.

### Getters

The getter functions help with retrieving all valid entries in a type or interface.

### Class transformers

These functions are used to transform a type to its related Bulma class.
Example. `ghost` → `is-ghost`