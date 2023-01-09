# hmm...?

- should I add auto `is-expanded` classes to single item
  navbar [sections](https://bulma.io/documentation/components/navbar/#navbar-menu) or leave it up to the user to add it
  themselves?
- Add input/textarea/etc. props like placeholder/disabled/etc. to the bulma props
	- Or add disclaimer/info in the documentation that the input props are hoisted/bound to the input element
- Add dropdown type to allow for multiple tags or another slot
	- idk cuz the library is suppose to make things simpler so if you slot it yourself you'd have to do the work of
	  wrapping `dropdown-content` idk
- for [button group](../src/components/containers/BulmaButtonGroup.vue) look into prop to pass buttons instead of
  slots
- Select and likely all inputs do not maintain state without a `v-model` prop
	- For example if the colour is reactively changed a selcet would default back whatever was selcected