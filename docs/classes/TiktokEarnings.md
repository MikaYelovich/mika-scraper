[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / TiktokEarnings

# Class: TiktokEarnings

Defined in: src/\_other-scraper/tiktok-earnings.ts:19

TikTok earnings tracker class using InfluencerMarketingHub.com.

## Constructors

### Constructor

> **new TiktokEarnings**(): `TiktokEarnings`

#### Returns

`TiktokEarnings`

## Methods

### track()

> **track**(`username`): `Promise`\<[`TikTokStats`](../interfaces/TikTokStats.md)\>

Defined in: src/\_other-scraper/tiktok-earnings.ts:51

Get TikTok user statistics and earnings estimation.

#### Parameters

##### username

`string`

TikTok username (without @)

#### Returns

`Promise`\<[`TikTokStats`](../interfaces/TikTokStats.md)\>

TikTokStats object

#### Example

```ts
const stats = await new TiktokEarnings().track('charlidamelio')
console.log(stats.name, stats.earnings)
```
