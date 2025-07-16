[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / downloadSnackVideo

# Function: downloadSnackVideo()

> **downloadSnackVideo**(`url`): `Promise`\<[`SnackVideoResult`](../type-aliases/SnackVideoResult.md)\>

Defined in: src/\_other-scraper/snackVideoDL.ts:32

Downloads video data from a SnackVideo URL using snackdownloader.com's public API.

## Parameters

### url

`string`

A valid SnackVideo video link.

## Returns

`Promise`\<[`SnackVideoResult`](../type-aliases/SnackVideoResult.md)\>

An object indicating success/failure and the video download URL or error message.
