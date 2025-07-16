[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / VocalRemover

# Class: VocalRemover

Defined in: src/\_other-scraper/vocal-remove.ts:29

Handles interaction with the AI Vocal Remover API.
Provides methods for uploading and processing audio files.

## Constructors

### Constructor

> **new VocalRemover**(): `VocalRemover`

#### Returns

`VocalRemover`

## Methods

### upload()

> **upload**(`filePath`): `Promise`\<[`UploadResponse`](../interfaces/UploadResponse.md)\>

Defined in: src/\_other-scraper/vocal-remove.ts:42

Uploads an audio file to AI Vocal Remover.

#### Parameters

##### filePath

`string`

Local path to the audio file.

#### Returns

`Promise`\<[`UploadResponse`](../interfaces/UploadResponse.md)\>

Promise resolving to upload response (file_name + key)

#### Throws

Error if the upload fails

#### Example

```ts
const vr = new VocalRemover()
const uploaded = await vr.upload('./song.mp3')
```

***

### process()

> **process**(`upload`): `Promise`\<[`ProcessResponse`](../interfaces/ProcessResponse.md)\>

Defined in: src/\_other-scraper/vocal-remove.ts:66

Processes the uploaded file to split vocals and instrumental.

#### Parameters

##### upload

[`UploadResponse`](../interfaces/UploadResponse.md)

UploadResponse containing file_name and key.

#### Returns

`Promise`\<[`ProcessResponse`](../interfaces/ProcessResponse.md)\>

Promise resolving to ProcessResponse with audio URLs.

#### Throws

Error if the processing fails

#### Example

```ts
// uploaded = upload step vr.upload()
const result = await vr.process(uploaded)
```

***

### run()

> **run**(`filePath`): `Promise`\<[`ProcessResponse`](../interfaces/ProcessResponse.md)\>

Defined in: src/\_other-scraper/vocal-remove.ts:96

One-liner: Uploads and processes the audio in a single step.

#### Parameters

##### filePath

`string`

Path to the local audio file.

#### Returns

`Promise`\<[`ProcessResponse`](../interfaces/ProcessResponse.md)\>

ProcessResponse with vocal & instrumental URLs

#### Example

```ts
const result = await vr.run('./song.mp3')
```
