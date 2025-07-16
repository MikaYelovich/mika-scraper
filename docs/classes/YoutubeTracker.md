[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / YoutubeTracker

# Class: YoutubeTracker

Defined in: src/\_other-scraper/youtube-tract.ts:46

Tracks YouTube channel statistics via SocialCounts API

## Constructors

### Constructor

> **new YoutubeTracker**(): `YoutubeTracker`

#### Returns

`YoutubeTracker`

## Methods

### track()

> **track**(`username`): `Promise`\<[`YoutubeTrackResult`](../interfaces/YoutubeTrackResult.md)\>

Defined in: src/\_other-scraper/youtube-tract.ts:74

Searches and retrieves YouTube channel subscriber data.

#### Parameters

##### username

`string`

YouTube channel name or ID

#### Returns

`Promise`\<[`YoutubeTrackResult`](../interfaces/YoutubeTrackResult.md)\>

YoutubeTrackResult with formatted stats

#### Throws

If channel is not found or API fails

#### Example

```ts
const yt = new YoutubeTracker()
const result = await yt.track('MrBeast')
console.log(result.channel.name)
```
