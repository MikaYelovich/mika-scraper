[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / ScreenshostWebsite

# Function: ScreenshostWebsite()

> **ScreenshostWebsite**(`url`): `Promise`\<[`ScreenshotResponse`](../type-aliases/ScreenshotResponse.md)\>

Defined in: src/\_other-scraper/ssweb.ts:55

Capture a screenshot of the given URL using Imagy's public API.

## Parameters

### url

`string`

The full URL of the web page to screenshot.

## Returns

`Promise`\<[`ScreenshotResponse`](../type-aliases/ScreenshotResponse.md)\>

The screenshot file URL or error message.

## Example

```ts
const result = await ScreenshostWebsite('https://example.com');
if (result.success) {
  console.log(result.fileUrl);
} else {
  console.error(result.error);
}
```
