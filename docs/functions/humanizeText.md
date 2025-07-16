[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / humanizeText

# Function: humanizeText()

> **humanizeText**(`text`, `level`, `settings`): `Promise`\<[`HumanizeResult`](../type-aliases/HumanizeResult.md)\>

Defined in: src/humanizer/humanizer.ts:74

Rewrite AI-generated text to make it more human-sounding using UnaiMyText.

## Parameters

### text

`string`

Input text to be humanized (required)

### level

[`RewriteLevel`](../type-aliases/RewriteLevel.md) = `'enhanced'`

Rewrite level: 'standard', 'enhanced', or 'aggressive'

### settings

[`RewriteSettings`](../interfaces/RewriteSettings.md) = `{}`

Optional custom settings to override default rewriting behavior

## Returns

`Promise`\<[`HumanizeResult`](../type-aliases/HumanizeResult.md)\>

A structured object indicating success/failure and rewritten content
