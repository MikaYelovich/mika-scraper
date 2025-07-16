[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / BrowseResponse

# Interface: BrowseResponse

Defined in: src/\_other-scraper/chatup-ai.ts:62

Response object returned from the `browsing` method.

## Properties

### success

> **success**: `boolean`

Defined in: src/\_other-scraper/chatup-ai.ts:64

Indicates whether browsing succeeded

***

### code

> **code**: `number`

Defined in: src/\_other-scraper/chatup-ai.ts:66

HTTP-like status code

***

### description

> **description**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:68

Description/snapshot of the browsing result

***

### image

> **image**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:70

Image-related prompt or preview (if available)

***

### urls

> **urls**: `string`[]

Defined in: src/\_other-scraper/chatup-ai.ts:72

Relevant URLs or references

***

### suggestions

> **suggestions**: `string`[]

Defined in: src/\_other-scraper/chatup-ai.ts:74

Suggested follow-up queries or insights
