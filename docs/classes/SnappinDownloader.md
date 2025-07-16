[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / SnappinDownloader

# Class: SnappinDownloader

Defined in: src/\_other-scraper/snappin.ts:41

Downloader class for fetching Pinterest media using Snappin.app.

## Example

```ts
const downloader = new SnappinDownloader();
const result = await downloader.download('https://pin.it/abc123');
if (result.status) {
  console.log(result.video);
}
```

## Constructors

### Constructor

> **new SnappinDownloader**(): `SnappinDownloader`

#### Returns

`SnappinDownloader`

## Methods

### download()

> **download**(`pinterestUrl`): `Promise`\<[`SnappinResponse`](../type-aliases/SnappinResponse.md)\>

Defined in: src/\_other-scraper/snappin.ts:50

Fetches downloadable video/image content from a public Pinterest URL.

#### Parameters

##### pinterestUrl

`string`

Public Pinterest post URL

#### Returns

`Promise`\<[`SnappinResponse`](../type-aliases/SnappinResponse.md)\>

Media result or error message
