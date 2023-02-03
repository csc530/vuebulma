# vbHero

[Bulma documentation](https://bulma.io/documentation/layout/hero/)

## Slots

### default

main hero content

always vertically centered

### head

content that always appears at the top of the hero

### foot

content that is always displayed at the bottom of the hero

## Props

### bodyTag

Type: `string` | `undefined`

Default: `section`

Element of main hero content

### colour

Type: [`BulmaColour`](../../types/common_types.md#bulmacolour) | `undefined`

(Background) colour of the hero

### size

Type `BulmaHeroSize` | `undefined`
>
BulmaHeroSize = [`BulmaSize`](../../types/common_types.md#bulmasize) | `halfheight` | `fullheight` | `fullheight-with-navbar`

The size of the hero

### footTag

Type: `string` | `undefined`

Default: `footer`

Parent element of [hero footer](#foot) content

### headTag

Type: `string` | `undefined`

Default: `header`

Parent element of [hero head](#head) content