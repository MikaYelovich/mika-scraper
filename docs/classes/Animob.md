[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / Animob

# Class: Animob

Defined in: src/animob/animob.ts:69

Animob API Client

A class-based wrapper around unofficial HiAnime/AniWatch APIs, giving you access to:
- Homepage featured anime
- Search and filter by genre
- Retrieve full anime info and episodes
- Extract streaming links from server ID

Example usage:
```ts
const client = new Animob();
const popular = await client.home();
const naruto = await client.search('naruto');
const detail = await client.detail('naruto');
const stream = await client.episode('naruto-ep-1?ep=1', 'HD-1');
```

## Constructors

### Constructor

> **new Animob**(): `Animob`

Defined in: src/animob/animob.ts:73

#### Returns

`Animob`

## Methods

### home()

> **home**(): `Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

Defined in: src/animob/animob.ts:95

Fetches curated content from the homepage: trending, latest, popular, etc.

#### Returns

`Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

List of homepage anime blocks

***

### genre()

> **genre**(`genre`, `page`): `Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

Defined in: src/animob/animob.ts:107

Retrieves a paginated list of anime for a specific genre.

#### Parameters

##### genre

`string` = `'action'`

Genre slug (e.g. 'action', 'drama', 'fantasy')

##### page

`number` = `1`

Page number for pagination

#### Returns

`Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

List of anime under the selected genre

#### Throws

Error if the genre is not supported

***

### search()

> **search**(`query`, `page`): `Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

Defined in: src/animob/animob.ts:135

Searches anime using a keyword.

#### Parameters

##### query

`string`

The title or keyword to search for

##### page

`number` = `1`

Page number for pagination

#### Returns

`Promise`\<[`Anime`](../interfaces/Anime.md)[]\>

List of matching anime

#### Throws

Error if no query is provided

***

### detail()

> **detail**(`id`): `Promise`\<[`Anime`](../interfaces/Anime.md) & `object`\>

Defined in: src/animob/animob.ts:151

Fetches full metadata for a specific anime, including all episodes.

#### Parameters

##### id

`string`

Anime slug ID (e.g. 'naruto')

#### Returns

`Promise`\<[`Anime`](../interfaces/Anime.md) & `object`\>

Anime metadata object with attached episodes

#### Throws

Error if ID is not provided

***

### episode()

> **episode**(`episodeId`, `server`): `Promise`\<[`StreamResponse`](../interfaces/StreamResponse.md)\>

Defined in: src/animob/animob.ts:170

Fetches streaming sources for a given episode ID and server name.

#### Parameters

##### episodeId

`string`

Full episode ID string (e.g. 'bleach-ep-1?ep=1')

##### server

`string` = `'HD-1'`

Server name (e.g. 'HD-1', 'HD-2', 'Auto')

#### Returns

`Promise`\<[`StreamResponse`](../interfaces/StreamResponse.md)\>

StreamResponse with sources and headers

#### Throws

If episode ID is invalid or server does not exist
