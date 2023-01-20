Types used for [vbPanel](../components/BulmaPanel.md#items)

### BulmaPanelType

**string**
Type: 'block' | 'tabs';

A _block_ item is for generic display content

A _tabs_ item is for a series tab items

## BulmaPanelItem

**object**

### vbType

Type: [`BulmaPanelType`](#bulmaPanelType)

The type of panel item to display

### vbTabs

Type: `{vbLink: string, vbTxt: string}[]` | `undefined`

For a panel type (vbType) of `tabs` will be displayed as the tabs within the panel

### vbTxt

Type: `string` | `undefined`

Text to display in the panel item

### BulmaPanelOptions

**object**

### number

Type: `number`

The number of [panel] items to create

### vbType

Type: [`BulmaPanelType`](#bulmapaneltype)

The type of panel items to create