[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / ImageResponse

# Interface: ImageResponse

Defined in: src/\_other-scraper/chatup-ai.ts:46

Response object returned from the `generateImage` method.

## Properties

### success

> **success**: `boolean`

Defined in: src/\_other-scraper/chatup-ai.ts:48

Indicates whether image generation succeeded

***

### code

> **code**: `number`

Defined in: src/\_other-scraper/chatup-ai.ts:50

HTTP-like status code

***

### content?

> `optional` **content**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:52

Description/content of the image (if available)

***

### imageUrl?

> `optional` **imageUrl**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:54

Direct URL to the generated image

***

### result?

> `optional` **result**: `object`

Defined in: src/\_other-scraper/chatup-ai.ts:56

Error details (if any)

#### error

> **error**: `string`
