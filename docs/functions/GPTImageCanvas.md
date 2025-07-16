[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / GPTImageCanvas

# Function: GPTImageCanvas()

> **GPTImageCanvas**(`imageUrl`, `prompt`, `apiKey?`): `Promise`\<`null` \| `string`\>

Defined in: src/\_other-scraper/gpt.ts:70

Edits an image using the OpenAI DALL-E image editing API.

## Parameters

### imageUrl

`string`

The URL of the image to be edited.

### prompt

`string`

The text prompt describing the desired edit.

### apiKey?

`string`

(Optional) Your OpenAI API key. If not provided, it will look for OPENAI_API_KEY in environment variables.

## Returns

`Promise`\<`null` \| `string`\>

A Promise that resolves with the base64 encoded edited image, or null if an error occurs.

## Throws

Will throw an error if the image download fails, API request fails, or no base64 image is returned.
