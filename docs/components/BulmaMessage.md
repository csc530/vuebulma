# BulmaMessage

[Bulma documentation](https://bulma.io/documentation/components/message/)
[Component source](../../src/components/BulmaMessage.vue)

A message box component

## Slots

### default

Text or HTML content to display in the message body

### heading

Text or HTML content to display in the message header

## Props

### [containerTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `article`

HTML or registered component tag for the message

### [headingTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `header`

HTML or registered component tag for the message's header

### heading

Type: `string` | `undefined`

Display text in message title

### deleteBtn

Type: `boolean` | `undefined`

Default: `false`

Display a close button in the message header

### [bodyTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `p`

HTML or registered component tag for the message's body

### colour

Type: [`BulmaColour`](../types/common_types.md#bulmacolour) | `undefined`

Colour of the message component

### [`size`](../types/common_types.md#bulmasize)

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

Display size of the message component

### closeBehaviour

Type: `boolean` | `hide` | `remove`

Default: `remove`

Behaviour of the message after close button is clicked

## Emits

### `closeMsg`

```ts:no-line-numbers
function closeMsg(event: Event, msgContainer: HTMLElement, deleteBtn: HTMLButtonElement): void {}
```

Emitted when the message is closed; when the close button is clicked.

- `event` is the event that triggered the close;
- `msgContainer` is the message container element.
- `deleteBtn` is the close button element.

If you had set the `closeBehaviour` prop to `hide`, you can use the `deleteBtn` click event to show the message again;
it works as a toggle.
