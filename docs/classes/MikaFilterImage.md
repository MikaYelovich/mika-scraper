[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / MikaFilterImage

# Class: MikaFilterImage

Defined in: src/\_other-scraper/face-filtet.ts:31

A service that applies AI-powered image filters

## Constructors

### Constructor

> **new MikaFilterImage**(): `MikaFilterImage`

#### Returns

`MikaFilterImage`

## Properties

### availableFilters

> `static` **availableFilters**: `Record`\<`string`, [`FilterConfig`](../interfaces/FilterConfig.md)\>

Defined in: src/\_other-scraper/face-filtet.ts:35

Static registry of supported filters with prompt definitions.

## Methods

### applyFilter()

> `static` **applyFilter**(`input`): `Promise`\<[`ApplyFilterOutput`](../interfaces/ApplyFilterOutput.md)\>

Defined in: src/\_other-scraper/face-filtet.ts:287

Apply a registered filter to a base64-encoded image.

#### Parameters

##### input

[`ApplyFilterInput`](../interfaces/ApplyFilterInput.md)

Input including the base64-encoded image and the filter name.

#### Returns

`Promise`\<[`ApplyFilterOutput`](../interfaces/ApplyFilterOutput.md)\>

Image buffer and text response

***

### getFilters()

> `static` **getFilters**(): [`FilterConfig`](../interfaces/FilterConfig.md)[]

Defined in: src/\_other-scraper/face-filtet.ts:313

Get metadata about available filters.

#### Returns

[`FilterConfig`](../interfaces/FilterConfig.md)[]

A list of filter names and their descriptions.
