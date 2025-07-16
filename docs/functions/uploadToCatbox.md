[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / uploadToCatbox

# Function: uploadToCatbox()

> **uploadToCatbox**(`buffer`, `filename`): `Promise`\<`string`\>

Defined in: src/\_other-scraper/uploader.ts:11

Uploads a given image buffer to Catbox for public access.

## Parameters

### buffer

`Buffer`

The image file buffer.

### filename

`string`

Name to assign to the file on Catbox.

## Returns

`Promise`\<`string`\>

A public Catbox URL pointing to the uploaded image.
