[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / TextToGhibli

# Function: TextToGhibli()

> **TextToGhibli**(`options`): `Promise`\<`string`\>

Defined in: src/ghibli/ghibli.ts:29

Generates an image using the Ghibli AI Image Generator and uploads it to Catbox.

## Parameters

### options

[`GhibliGenerationOptions`](../interfaces/GhibliGenerationOptions.md)

Contains the prompt and Ghibli style to use.

## Returns

`Promise`\<`string`\>

A publicly accessible URL of the generated image.

## Throws

Error if the generation or upload process fails.
