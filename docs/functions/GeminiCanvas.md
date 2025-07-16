[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / GeminiCanvas

# Function: GeminiCanvas()

> **GeminiCanvas**(`prompt`, `base64Image`, `mimeType`, `apiKey`): `Promise`\<\{ `imageBuffer?`: `Buffer`\<`ArrayBufferLike`\>; `textResponse?`: `string`; \}\>

Defined in: src/gemini/gemini.ts:12

Generates an image and text response from Gemini using prompt and base64 image.

## Parameters

### prompt

`string`

Text prompt to condition image generation

### base64Image

`string`

Base64-encoded image data

### mimeType

`string`

MIME type (e.g., "image/png")

### apiKey

`string`

## Returns

`Promise`\<\{ `imageBuffer?`: `Buffer`\<`ArrayBufferLike`\>; `textResponse?`: `string`; \}\>

Object containing image buffer and textual response
