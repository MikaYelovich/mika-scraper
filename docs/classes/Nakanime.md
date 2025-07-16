[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / Nakanime

# Class: Nakanime

Defined in: src/nakanimendo/nakanime.ts:47

Class for accessing anime data from Nakanime unofficial API.

## Constructors

### Constructor

> **new Nakanime**(): `Nakanime`

Defined in: src/nakanimendo/nakanime.ts:50

#### Returns

`Nakanime`

## Methods

### get()

> **get**(`order`, `page`): `Promise`\<[`SearchResult`](../interfaces/SearchResult.md)\>

Defined in: src/nakanimendo/nakanime.ts:66

Get anime list sorted by order type.

#### Parameters

##### order

`string` = `'latest'`

Sorting method ('title', 'latest', 'popular', etc.)

##### page

`number` = `1`

Page number

#### Returns

`Promise`\<[`SearchResult`](../interfaces/SearchResult.md)\>

***

### genre()

> **genre**(`genre`, `page`): `Promise`\<`any`\>

Defined in: src/nakanimendo/nakanime.ts:90

Get anime list by genre

#### Parameters

##### genre

`string`

Genre slug (e.g., 'action', 'comedy')

##### page

`number` = `1`

Page number

#### Returns

`Promise`\<`any`\>

***

### search()

> **search**(`query`): `Promise`\<[`SearchResult`](../interfaces/SearchResult.md)\>

Defined in: src/nakanimendo/nakanime.ts:109

Search anime by keyword

#### Parameters

##### query

`string`

Search term

#### Returns

`Promise`\<[`SearchResult`](../interfaces/SearchResult.md)\>

***

### getDetail()

> **getDetail**(`url`): `Promise`\<`any`\>

Defined in: src/nakanimendo/nakanime.ts:121

Get anime detail from URL

#### Parameters

##### url

`string`

Anime detail page URL

#### Returns

`Promise`\<`any`\>

***

### getData()

> **getData**(`url`): `Promise`\<`any`\>

Defined in: src/nakanimendo/nakanime.ts:138

Get episode data from URL

#### Parameters

##### url

`string`

Episode URL

#### Returns

`Promise`\<`any`\>
