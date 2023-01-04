# BulmaMessage

[Bulma documentation](https://bulma.io/documentation/components/message/)
[Component source](../../src/components/BulmaMessage.vue)

A message box component

## Slots

### default

Text or HTML content to display in the message body

### header

Text or HTML content to display in the message header

## Props

### [containerTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `article`

HTML or registered component tag for the message

### [headerTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `header`

HTML or registered component tag for the message's header

### title

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

Type: `boolean` | `hide` | `remove` | `(event: Event, messageElement: HTMLElement) => void`

Default: `hide`

Behaviour of the message after close button is clicked

## Emits

### `closeMsg`

```ts
function closeMsg(event: Event, msgContainer: HTMLElement): void {}
```

Emitted when the message is closed; when the close button is clicked.

- `event` is the event that triggered the close;
- `msgContainer` is the message container element.
