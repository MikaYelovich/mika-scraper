[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / generateLogo

# Function: generateLogo()

> **generateLogo**(`options`): `Promise`\<[`FantaxyCompletedResponse`](../interfaces/FantaxyCompletedResponse.md)\>

Defined in: src/logo-generator/fantaxy.ts:141

Main entry point to generate a logo in a single call.
Combines the prompt generation and streaming response into one flow.

## Parameters

### options

[`LogoRequestOptions`](../interfaces/LogoRequestOptions.md)

Logo prompt description

## Returns

`Promise`\<[`FantaxyCompletedResponse`](../interfaces/FantaxyCompletedResponse.md)\>

Final response payload containing the generated asset URL
