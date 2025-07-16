[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / imageToPrompt

# Function: imageToPrompt()

> **imageToPrompt**(`options`): `Promise`\<[`NeuralFramesResponse`](../interfaces/NeuralFramesResponse.md)\>

Defined in: src/\_other-scraper/imagetoprompt.ts:28

Uploads an image (either from a URL or a raw Buffer) to NeuralFrames'
CLIP Interrogate endpoint and returns an AI-generated textual prompt.

## Parameters

### options

[`ImageToPromptOptions`](../interfaces/ImageToPromptOptions.md)

The input options containing either a URL or Buffer.

## Returns

`Promise`\<[`NeuralFramesResponse`](../interfaces/NeuralFramesResponse.md)\>

A promise resolving to the AI-generated prompt.

## Throws

Error if both input types are missing or the API fails.
