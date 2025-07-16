[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / GalaxyAI

# Class: GalaxyAI

Defined in: src/\_other-scraper/galaxyai.ts:72

GalaxyAI SDK - Text generation and manipulation tool using `translapp.info`.

## Remarks

Supports summarization, paraphrasing, expansion, tone editing, grammar fixing, translation, and reply generation.

## Constructors

### Constructor

> **new GalaxyAI**(): `GalaxyAI`

#### Returns

`GalaxyAI`

## Properties

### modules

> `readonly` `static` **modules**: [`GalaxyModule`](../type-aliases/GalaxyModule.md)[]

Defined in: src/\_other-scraper/galaxyai.ts:73

***

### tones

> `readonly` `static` **tones**: [`ToneType`](../type-aliases/ToneType.md)[]

Defined in: src/\_other-scraper/galaxyai.ts:82

***

### replies

> `readonly` `static` **replies**: [`ReplyLength`](../type-aliases/ReplyLength.md)[]

Defined in: src/\_other-scraper/galaxyai.ts:92

## Methods

### request()

> `static` **request**(`text`, `module`, `to`, `customTone`): `Promise`\<[`GalaxyResult`](../interfaces/GalaxyResult.md)\>

Defined in: src/\_other-scraper/galaxyai.ts:116

Request processing using the GalaxyAI API.

#### Parameters

##### text

`string`

Input text for transformation.

##### module

[`GalaxyModule`](../type-aliases/GalaxyModule.md)

One of the supported GalaxyModule operations.

##### to

`string` = `''`

Auxiliary parameter (e.g., tone type or language).

##### customTone

`string` = `''`

Custom tone name if tone is set to 'Other'.

#### Returns

`Promise`\<[`GalaxyResult`](../interfaces/GalaxyResult.md)\>

Structured result object.

#### Example

```ts
const result = await GalaxyAI.request("I need this translated.", "TRANSLATE", "French");
if (result.success) console.log(result.result.output);
```
