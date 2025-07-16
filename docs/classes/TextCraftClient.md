[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / TextCraftClient

# Class: TextCraftClient

Defined in: src/textcraft/TextCraftClient.ts:65

TextCraft image generation client (configurable and reusable).

## Constructors

### Constructor

> **new TextCraftClient**(`options?`): `TextCraftClient`

Defined in: src/textcraft/TextCraftClient.ts:69

#### Parameters

##### options?

[`TextCraftClientOptions`](../interfaces/TextCraftClientOptions.md)

#### Returns

`TextCraftClient`

## Methods

### generateImage()

> **generateImage**(`input`): `Promise`\<`string`\>

Defined in: src/textcraft/TextCraftClient.ts:96

Generate a Minecraft-style image using text and optional styles.

#### Parameters

##### input

Required text and optional style overrides.

###### text

`string` = `...`

###### text2?

`string` = `...`

###### text3?

`string` = `...`

###### fontStyle?

`string` = `...`

###### fontStyle2?

`string` = `...`

###### fontStyle3?

`string` = `...`

###### fontSize?

`string` = `...`

###### fontSize2?

`string` = `...`

###### fontSize3?

`string` = `...`

###### fontColour?

`string` = `...`

###### fontColour2?

`string` = `...`

###### fontColour3?

`string` = `...`

###### borderColour?

`string` = `...`

###### borderColour2?

`string` = `...`

###### borderColour3?

`string` = `...`

###### dropShadow?

`boolean` = `...`

###### glossy?

`boolean` = `...`

###### lighting?

`boolean` = `...`

###### glitterBorder?

`boolean` = `...`

#### Returns

`Promise`\<`string`\>

Promise<string> - Direct URL to the generated image.
