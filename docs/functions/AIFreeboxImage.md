[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / AIFreeboxImage

# Function: AIFreeboxImage()

> **AIFreeboxImage**(`prompt`, `aspectRatio`, `slug`): `Promise`\<`string`\>

Defined in: src/aifreebox/aifreebox.ts:31

Generates an image using the AI Freebox API.

## Parameters

### prompt

`string`

The prompt describing the image content.

### aspectRatio

[`SupportedAspectRatios`](../type-aliases/SupportedAspectRatios.md) = `'16:9'`

The desired aspect ratio of the image.

### slug

[`SupportedSlugs`](../type-aliases/SupportedSlugs.md) = `'ai-art-generator'`

The category or model used for generation.

## Returns

`Promise`\<`string`\>

The URL of the generated image.

## Throws

Will throw an error if the aspectRatio or slug is invalid, or if the API fails.
