[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / ChatUpAI

# Class: ChatUpAI

Defined in: src/\_other-scraper/chatup-ai.ts:114

ChatUpAI SDK – Core wrapper for interacting with ChatUpAI.org API.

Provides methods for:
- Chat completions
- Image generation
- Web browsing
- PDF-to-text extraction

## Example

```ts
const response = await ChatUpAI.chat("Hello, what is AI?");
console.log(response.result);
```

## Constructors

### Constructor

> **new ChatUpAI**(): `ChatUpAI`

#### Returns

`ChatUpAI`

## Methods

### generateId()

> `static` **generateId**(): `string`

Defined in: src/\_other-scraper/chatup-ai.ts:131

Generates a unique hexadecimal session ID.

#### Returns

`string`

A secure 16-character session ID

***

### cleanupSessions()

> `static` **cleanupSessions**(): `void`

Defined in: src/\_other-scraper/chatup-ai.ts:140

Removes expired sessions from memory.

Runs internally after each chat operation to ensure cleanup.

#### Returns

`void`

***

### chat()

> `static` **chat**(`input`, `sessionId?`): `Promise`\<[`ChatResponse`](../interfaces/ChatResponse.md)\>

Defined in: src/\_other-scraper/chatup-ai.ts:162

Sends a chat message to ChatUpAI and receives an AI response.

#### Parameters

##### input

`string`

The user's input message

##### sessionId?

`string`

Optional session ID to maintain context

#### Returns

`Promise`\<[`ChatResponse`](../interfaces/ChatResponse.md)\>

A ChatResponse object containing the AI's reply

#### Example

```ts
const reply = await ChatUpAI.chat("What is quantum computing?");
console.log(reply.result);
```

***

### generateImage()

> `static` **generateImage**(`prompt`, `n`, `size`): `Promise`\<[`ImageResponse`](../interfaces/ImageResponse.md)\>

Defined in: src/\_other-scraper/chatup-ai.ts:243

Generates an image based on a descriptive text prompt.

#### Parameters

##### prompt

`string`

Text prompt describing the image

##### n

`number` = `1`

Number of images to generate (default: 1)

##### size

`string` = `'1024x1024'`

Size of the image (default: '1024x1024')

#### Returns

`Promise`\<[`ImageResponse`](../interfaces/ImageResponse.md)\>

ImageResponse containing image URL and content

#### Example

```ts
const result = await ChatUpAI.generateImage("A forest in neon colors");
console.log(result.imageUrl);
```

***

### browsing()

> `static` **browsing**(`input`): `Promise`\<[`BrowseResponse`](../interfaces/BrowseResponse.md)\>

Defined in: src/\_other-scraper/chatup-ai.ts:298

Performs web browsing based on user query.

#### Parameters

##### input

`string`

Query or search term to browse

#### Returns

`Promise`\<[`BrowseResponse`](../interfaces/BrowseResponse.md)\>

BrowseResponse containing summary, URLs, and suggestions

#### Example

```ts
const info = await ChatUpAI.browsing("Who won the 2024 election?");
console.log(info.description);
```

***

### pdf2Text()

> `static` **pdf2Text**(`filePath`): `Promise`\<[`PdfTextResponse`](../interfaces/PdfTextResponse.md)\>

Defined in: src/\_other-scraper/chatup-ai.ts:350

Converts a local PDF file into extracted plain text.

#### Parameters

##### filePath

`string`

Path to a PDF file

#### Returns

`Promise`\<[`PdfTextResponse`](../interfaces/PdfTextResponse.md)\>

PdfTextResponse containing the extracted text or error message

#### Example

```ts
const text = await ChatUpAI.pdf2Text("./document.pdf");
console.log(text.data);
```
