# hmm...?

- should I add auto `is-expanded` classes to single item
  navbar [sections](https://bulma.io/documentation/components/navbar/#navbar-menu) or leave it up to the user to add it
  themselves?
- Add input/textarea/etc. props like placeholder/disabled/etc. to the bulma props
	- Or add disclaimer/info in the documentation that the input props are hoisted/bound to the input element
- Add dropdown type to allow for multiple tags or another slot
	- idk cuz the library is supposed to make things simpler so if you slot it yourself you'd have to do the work of
	  wrapping `dropdown-content` idk
- for [button group](../src/vbComponents/layouts/BulmaButtonGroup.vue) look into prop to pass buttons instead
  of
  slots
- Select and likely all inputs do not maintain state without a `v-model` prop
	- For example if the colour is reactively changed a select would default back whatever was selected
- Remove slot in Bulma Select??
- icon prop on fileinput to remove icon span even if there is a slot
	- i.e if the slot is using v-if (which make a comment which is a slot) but don't want a placeholder for the icon
- Add help-text ontop option for form field
	- probably just for non-horizontal as it's not aligned nicely when the help is on top when it's horizontal