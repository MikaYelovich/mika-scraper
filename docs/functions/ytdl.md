[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / ytdl

# Function: ytdl()

> **ytdl**(`youtubeUrl`): `Promise`\<[`ScrapeResult`](../interfaces/ScrapeResult.md)\>

Defined in: src/youtube/ytdl.ts:72

Extracts all downloadable media formats and metadata from a YouTube video using ssyoutube.rip backend.

## Parameters

### youtubeUrl

`string`

The full URL to the YouTube video.

## Returns

`Promise`\<[`ScrapeResult`](../interfaces/ScrapeResult.md)\>

An object containing metadata and download links, or throws on failure.
