[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / PoemGenerator

# Function: PoemGenerator()

> **PoemGenerator**(`options`): `Promise`\<[`PoemResponse`](../type-aliases/PoemResponse.md)\>

Defined in: src/poem/poem-generator.ts:79

Generates a structured, themed poem using https://aipoemgenerator.io

Under the hood, it simulates a browser session to:
 1. Fetch the CSRF token and session cookie from the homepage
 2. Submit a POST form with your chosen poem parameters

## Parameters

### options

[`GeneratePoemOptions`](../interfaces/GeneratePoemOptions.md) = `{}`

Configuration including topic, length, type, and language

## Returns

`Promise`\<[`PoemResponse`](../type-aliases/PoemResponse.md)\>

A PoemResponse, containing either the text or an error

## Example

```ts
const poem = await generatePoem({
  topic: "starfall",
  type: "Haiku",
  lang: "English",
  length: "short"
});
```
