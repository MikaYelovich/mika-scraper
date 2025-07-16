[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / FeloSearch

# Function: FeloSearch()

> **FeloSearch**(`prompt`): `Promise`\<`string`\>

Defined in: src/felo/felo.ts:102

Main Felo AI search method.
Streams response from felo.ai and combines it with DuckDuckGo references.

## Parameters

### prompt

`string`

The user's search query

## Returns

`Promise`\<`string`\>

Formatted string combining AI result + references
