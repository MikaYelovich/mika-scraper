[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / downloadTikTok

# Function: downloadTikTok()

> **downloadTikTok**(`tiktokUrl`, `retryOptions`): `Promise`\<[`TikTokResult`](../type-aliases/TikTokResult.md)\>

Defined in: src/downloader/tiktok.ts:88

Downloads TikTok content via tmate.cc by submitting a URL and scraping response data.

## Parameters

### tiktokUrl

`string`

Full TikTok video or image post URL.

### retryOptions

[`RetryOptions`](../interfaces/RetryOptions.md) = `{}`

Retry options for failed requests (default: { retries: 3, delayMs: 1000 }).

## Returns

`Promise`\<[`TikTokResult`](../type-aliases/TikTokResult.md)\>

TikTokResult object containing video, image, or audio links.

## Throws

Error if token, HTML content, or links are missing or invalid.
