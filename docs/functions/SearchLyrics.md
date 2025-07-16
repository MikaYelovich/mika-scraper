[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / SearchLyrics

# Function: SearchLyrics()

> **SearchLyrics**(`query`): `Promise`\<[`LyricsResult`](../interfaces/LyricsResult.md)\>

Defined in: src/song-lyrics/song.ts:21

Fetch lyrics and metadata for a given song query from songtexte.com

## Parameters

### query

`string`

The song name or artist and title to search

## Returns

`Promise`\<[`LyricsResult`](../interfaces/LyricsResult.md)\>

Object containing song title, artist, url and cleaned lyrics

## Throws

If no result or network/scrape failure occurs
