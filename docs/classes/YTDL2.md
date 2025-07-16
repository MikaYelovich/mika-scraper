[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / YTDL2

# Class: YTDL2

Defined in: src/youtube/ytdl2.ts:19

Downloads a YouTube video as audio or video using flvto.online backend.

## Constructors

### Constructor

> **new YTDL2**(): `YTDL2`

#### Returns

`YTDL2`

## Methods

### download()

> **download**(`url`, `format`): `Promise`\<[`YTDL2Response`](../interfaces/YTDL2Response.md)\>

Defined in: src/youtube/ytdl2.ts:32

Fetches downloadable link and metadata from a video ID.

#### Parameters

##### url

`string`

##### format

Desired format ("mp3" | "mp4"). Defaults to "mp3"

`"mp3"` | `"mp4"`

#### Returns

`Promise`\<[`YTDL2Response`](../interfaces/YTDL2Response.md)\>

Parsed response including title, duration, and download link

#### Throws

Error if request fails or API returns non-ok status

#### Example

```ts
const result = await new YTDL2().download('https://www.youtube.com/watch?v=0TR3_-Rz7t0')
console.log(result.title, result.link)
```

***

### extractVideoId()

> **extractVideoId**(`videoUrl`): `string`

Defined in: src/youtube/ytdl2.ts:73

Extracts the video ID from a full YouTube URL.

#### Parameters

##### videoUrl

`string`

Any valid YouTube URL

#### Returns

`string`

Video ID string (e.g., Ajxn0PKbv7I)

#### Throws

Error if ID cannot be extracted

#### Example

```ts
const id = await new YTDL2().extractVideoId("https://www.youtube.com/watch?v=Ajxn0PKbv7I")
```

***

### downloadByUrl()

> **downloadByUrl**(`videoUrl`, `format`): `Promise`\<[`YTDL2Response`](../interfaces/YTDL2Response.md)\>

Defined in: src/youtube/ytdl2.ts:111

Downloads a YouTube video as mp3 or mp4 using the video URL.

#### Parameters

##### videoUrl

`string`

Full YouTube video URL

##### format

Output format (mp3 or mp4)

`"mp3"` | `"mp4"`

#### Returns

`Promise`\<[`YTDL2Response`](../interfaces/YTDL2Response.md)\>

Download metadata from flvto.online

#### Throws

Error if conversion fails

#### Example

```ts
const info = await new YTDL2().downloadByUrl('https://youtu.be/Ajxn0PKbv7I', 'mp3')
```
