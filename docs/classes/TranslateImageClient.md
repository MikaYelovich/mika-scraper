[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / TranslateImageClient

# Class: TranslateImageClient

Defined in: src/\_other-scraper/translate-image.ts:23

Main client for interacting with TranslateImage.app services.
Supports uploading, translating e-commerce product images, general OCR images, and manga panels.

## Constructors

### Constructor

> **new TranslateImageClient**(): `TranslateImageClient`

#### Returns

`TranslateImageClient`

## Methods

### getUploadCredentials()

> **getUploadCredentials**(`fileName`, `fileType`): `Promise`\<[`UploadCredentials`](../interfaces/UploadCredentials.md)\>

Defined in: src/\_other-scraper/translate-image.ts:53

Requests temporary credentials for uploading an image to Aliyun OSS.

#### Parameters

##### fileName

`string` = `'image.jpg'`

Name of the file to upload (default: "image.jpg")

##### fileType

`string` = `'image/jpeg'`

MIME type of the file (default: "image/jpeg")

#### Returns

`Promise`\<[`UploadCredentials`](../interfaces/UploadCredentials.md)\>

Promise resolving to UploadCredentials object

#### Throws

Error if credentials cannot be retrieved

#### Example

```ts
const creds = await client.getUploadCredentials('product.png')
```

***

### uploadToAliyunOSS()

> **uploadToAliyunOSS**(`localPath`, `credentials`): `Promise`\<`string`\>

Defined in: src/\_other-scraper/translate-image.ts:79

Uploads a file to Aliyun OSS using provided credentials.

#### Parameters

##### localPath

`string`

Full path to the local image file

##### credentials

[`UploadCredentials`](../interfaces/UploadCredentials.md)

UploadCredentials object received from getUploadCredentials()

#### Returns

`Promise`\<`string`\>

Public image URL after upload

#### Throws

Error if upload fails

#### Example

```ts
const url = await client.uploadToAliyunOSS('./product.jpg', creds)
```

***

### translateEcommerce()

> **translateEcommerce**(`imageUrl`, `sourceLanguage`, `targetLanguage`): `Promise`\<`any`\>

Defined in: src/\_other-scraper/translate-image.ts:117

Submits an uploaded image URL for translation in e-commerce context.
Returns translated text and additional metadata.

#### Parameters

##### imageUrl

`string`

Public image URL returned from upload

##### sourceLanguage

`string` = `'auto'`

Language code of original text (default: 'auto')

##### targetLanguage

`string` = `'en'`

Desired output language (default: 'en')

#### Returns

`Promise`\<`any`\>

Translation result object

#### Example

```ts
const result = await client.translateEcommerce(url, 'ja', 'en')
```

***

### translateImage()

> **translateImage**(`buffer`, `filename`, `from`, `to`): `Promise`\<`any`\>

Defined in: src/\_other-scraper/translate-image.ts:152

Submits a general image buffer for standard OCR translation.

#### Parameters

##### buffer

`Buffer`

Raw image buffer

##### filename

`string`

Filename to associate with the image

##### from

`string` = `'auto'`

Source language (default: "auto")

##### to

`string` = `'en'`

Target language (default: "en")

#### Returns

`Promise`\<`any`\>

Translation response data

#### Example

```ts
const data = await client.translateImage(fs.readFileSync('ocr.jpg'), 'ocr.jpg')
```

***

### translateManga()

> **translateManga**(`buffer`, `filename`, `from`, `to`): `Promise`\<`any`\>

Defined in: src/\_other-scraper/translate-image.ts:188

Submits an image for manga-specific translation.
Supports automatic panel detection and direction awareness.

#### Parameters

##### buffer

`Buffer`

Image buffer

##### filename

`string`

Name of the manga image file

##### from

`string` = `'auto'`

Source language (default: "auto")

##### to

`string` = `'ENG'`

Target language (default: "ENG")

#### Returns

`Promise`\<`any`\>

Translation data including text regions and annotations

#### Example

```ts
const result = await client.translateManga(fs.readFileSync('manga.jpg'), 'manga.jpg')
```

***

### uploadFile()

> **uploadFile**(`localFilePath`): `Promise`\<`string`\>

Defined in: src/\_other-scraper/translate-image.ts:223

Helper method: Upload a file and return the final image URL.
This internally handles credential fetch and OSS upload.

#### Parameters

##### localFilePath

`string`

Full path to local image file

#### Returns

`Promise`\<`string`\>

Final image URL

#### Example

```ts
const url = await client.uploadFile('./poster.jpg')
```
