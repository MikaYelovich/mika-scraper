[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / TempMail

# Class: TempMail

Defined in: src/temp-mail/tempmail.ts:46

Tempail Temporary Email SDK
Provides access to temp email creation and inbox message reading
via the unofficial API: https://tempail.top

## Constructors

### Constructor

> **new TempMail**(): `TempMail`

#### Returns

`TempMail`

## Methods

### create()

> `static` **create**(): `Promise`\<[`TempMailResponse`](../interfaces/TempMailResponse.md)\<[`TempMailCreateResult`](../interfaces/TempMailCreateResult.md)\>\>

Defined in: src/temp-mail/tempmail.ts:59

Generates a new temporary email address.

#### Returns

`Promise`\<[`TempMailResponse`](../interfaces/TempMailResponse.md)\<[`TempMailCreateResult`](../interfaces/TempMailCreateResult.md)\>\>

An object with a generated email address and token.

#### Throws

On HTTP or parsing errors.

***

### checkInbox()

> `static` **checkInbox**(`token`): `Promise`\<[`TempMailResponse`](../interfaces/TempMailResponse.md)\<[`TempMailMessage`](../interfaces/TempMailMessage.md)[]\>\>

Defined in: src/temp-mail/tempmail.ts:91

Fetches inbox messages for a specific temp email token.

#### Parameters

##### token

`string`

Unique token tied to the generated email address

#### Returns

`Promise`\<[`TempMailResponse`](../interfaces/TempMailResponse.md)\<[`TempMailMessage`](../interfaces/TempMailMessage.md)[]\>\>

List of inbox messages

#### Throws

If token is invalid or request fails
