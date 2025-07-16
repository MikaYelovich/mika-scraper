[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / GuessTheFlag

# Function: GuessTheFlag()

> **GuessTheFlag**(): `Promise`\<[`FlagQuestion`](../interfaces/FlagQuestion.md)\>

Defined in: src/games/guess-flag.ts:20

Fetches and constructs a "Guess the Flag" question using real-time country data
from the RESTCountries API.

## Returns

`Promise`\<[`FlagQuestion`](../interfaces/FlagQuestion.md)\>

A `FlagQuestion` object containing flag image URL, correct answer, and options.
