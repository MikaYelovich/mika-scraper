[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / ChatResponse

# Interface: ChatResponse

Defined in: src/\_other-scraper/chatup-ai.ts:21

Response object returned from the `chat` method.

## Properties

### success

> **success**: `boolean`

Defined in: src/\_other-scraper/chatup-ai.ts:23

Indicates whether the operation was successful

***

### code

> **code**: `number`

Defined in: src/\_other-scraper/chatup-ai.ts:25

HTTP-like status code

***

### result

> **result**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:27

Result string (usually assistant's response or error)

***

### sessionId?

> `optional` **sessionId**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:29

Unique identifier of the chat session

***

### sessionExpiry?

> `optional` **sessionExpiry**: `string`

Defined in: src/\_other-scraper/chatup-ai.ts:31

ISO timestamp of session expiry

***

### messageCount?

> `optional` **messageCount**: `object`

Defined in: src/\_other-scraper/chatup-ai.ts:33

Metadata about number of stored messages

#### current

> **current**: `number`

#### max

> **max**: `number`

***

### isNewSession?

> `optional` **isNewSession**: `boolean`

Defined in: src/\_other-scraper/chatup-ai.ts:38

Indicates whether this was a new session

***

### isFollowUp?

> `optional` **isFollowUp**: `boolean`

Defined in: src/\_other-scraper/chatup-ai.ts:40

Indicates whether this was a follow-up message
