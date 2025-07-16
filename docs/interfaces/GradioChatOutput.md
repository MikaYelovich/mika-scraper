[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / GradioChatOutput

# Interface: GradioChatOutput

Defined in: src/deepseek-r1/deepseek.ts:29

Represents the detailed structure of the `output` object returned by DeepSeek.

## Properties

### data

> **data**: \[\[\[`string`, `string`\]\], `string`\]

Defined in: src/deepseek-r1/deepseek.ts:34

The actual chat result, typically an array containing:
  [ [ [inputText, responseText] ], "" ]

***

### is\_generating

> **is\_generating**: `boolean`

Defined in: src/deepseek-r1/deepseek.ts:35

***

### duration

> **duration**: `number`

Defined in: src/deepseek-r1/deepseek.ts:36

***

### average\_duration

> **average\_duration**: `number`

Defined in: src/deepseek-r1/deepseek.ts:37

***

### render\_config

> **render\_config**: `any`

Defined in: src/deepseek-r1/deepseek.ts:38

***

### changed\_state\_ids

> **changed\_state\_ids**: `string`[]

Defined in: src/deepseek-r1/deepseek.ts:39
