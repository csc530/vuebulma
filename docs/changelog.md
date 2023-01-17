# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add elements
	- Delete
	- notification
	- Progress bar

### Changed

### Removed
- unnecessary vuepress and etc. dependencies

### Fixed

## [0.0.0-13]

### Added

- `./types` export to package.json for all related package exports

- CSS to [BulmaButton](components/elements/BulmaButton.md) component to not round corners in
  a [BulmaButtonGroup](components/layouts/BulmaButtonGroup.md) when it's small and `has-addons` is
  applied

### Changed

- names of components to be prefixed with `vb` instead of `Bulma`

- update package.json to include `.` export of `dist/vuebulma`

- type names of... and prepended `Bulma` to them
	- Grayscale
	- getGrayscale
	- getAspectRatios
	- SubMenuItem
	- MenuItem
	- Menu
	- isMenuItem
	- getOptionValue
- Names of class getter functions to begin with `to`
	- getColourClass
	- getSizeClasses
	- getNavbarItemClasses

### Removed

### Fixed

- [BulmaSelect](components/form/BulmaSelect.md) - `v-model` to work with multiple property and `multiple` attribute to
  return an array of selected values and display them in the select element

## Deprecated

## [0.0.0-12] - 2023-01-11

### Added

- Add docs to props of...
	- [BulmaControl](components/form/BulmaFormFields.md#vbformcontrol)
	- [BulmaControlGroup](components/form/BulmaFormFields.md#vbformcontrolgroup)
	- [BulmaFormField](components/form/BulmaFormFields.md#vbformfield)
- alignment, multiline and grouped (spacing) classes
  for [BulmaControlGroup](components/form/BulmaFormFields.md#vbformcontrolgroup)
- label size and `for` attribute for [BulmaFormField](components/form/BulmaFormFields.md#vbformfield)

### Changed

### Deprecated

### Removed

### Fixed

- colour of `BulmaIcon` when a single icon is passed in as a prop or slot

## [0.0.0-11] - 2023-01-09

### Added

- Add docs to props of...
	- [BulmaFileInput](components/form/BulmaFileInput.md)
- Add state prop to BulmaInput
- Icon support for [BulmaControl](components/form/BulmaFormFields.md#vbformcontrol)

### Removed

- .umd.js file from package
- invalid props on bulma input
	- isLoading
	- isRounded

### Fixed

- Exported files to use ecmaascript modules instead of commonjs modules.
  [0.0.0-10.2] - 2023-01-09

### Added

- case to dependencies

## [0.0.0-10.1] - 2023-01-09

### Added

- [Type helpers](types/BulmaOption.md) for BulmaSelect

### Changed

### Deprecated

### Removed

### Fixed

- Exports in package to export `dist/vuebulma`
- `isFullWidth` prop capitalization in BulmaSelect to transform to `is-fullwidth` class

## [0.0.0-10] - 2023-08-01

### Added

- Documentation to props of
	- [Button](components/elements/BulmaButton.md)
	- [Button Group](components/layouts/BulmaButtonGroup.md)
	- [Navbar](components/BulmaNavbar.md)
	- [Dropdown](components/BulmaDropdown.md)
	- [Menu](components/BulmaMenu.md)
	- [TextArea](components/form/BulmaTextArea.md)
	- [Select](components/form/BulmaSelect.md)
- Shadow class to [Navbar](components/BulmaNavbar.md)
- isMultiple class to [Select](components/form/BulmaSelect.md)

### Changed

- [Button](components/elements/BulmaButton.md)
	- `isActive` to `state` and accepts all button states classes
- Buttons to [BulmaButtonGroup](components/layouts/BulmaButtonGroup.md)
- [BulmaNavbarItem type](types/BulmaNavbarItem.md) to be as concise and clear as possible to help render item
  in [BulmaNavbar](components/BulmaNavbar.md)
- `color` prop on BulmaSelect to `colour`

### Removed

- [BulmaButtonGroup](components/layouts/BulmaButtonGroup.md)
	- `items` prop

### Fixed

- BulmaIcon wrap text in span to prevent collision with icon
- BulmaTextArea `hasFixedSize` prop to apply the `is-fixed-size` class
- v-model to allow for array of values to be selected in [BulmaSelect](components/form/BulmaSelect.md)

## [0.0.0-9] - 2023-01-04

### Fixed

- Exports and build of package files

## [0.0.0-8] - 2023-01-03

### Added

- Documentation to props of
	- [Breadcrumb](components/BulmaBreadcrumb.md)
	- [Heading](components/elements/BulmaHeading.md)
	- [Icon](components/elements/BulmaIcon.md)
	- [Image](components/elements/BulmaImage.md)

### Changed

- Types allowed in [Bulma Breadcrumb](components/BulmaBreadcrumb.md#list) list prop to `any`

## [0.0.0-7.1] - 2022-12-14

### Added

- Option to pass slots to component items in navbar dropdowns

### Fixed

- Export of types in types.ts for package
- Fixed navbar activation method on item click
- Button prop/ButtonColour type to include all colours + text + ghost

## [0.0.0-7] - 2022-12-13

### Added

- Added `BulmaFormField`, `BulmaFormControl`, and `BulmaFormControlGroup` components

### Changed

- Typescript definitions to include comments/documentation of props, types, functions, etc.

## [0.0.0-6.1] - 2022-12-13

### Fixed

- Fixed exports in the `package.json`; not exporting `dist/vuebulma`

## [0.0.0-6] - 2022-12-13

### Changed

- Typescript definitions for components props, props that use custom types should now be exported as well.
