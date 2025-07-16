[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / DeepseekR1

# Function: DeepseekR1()

> **DeepseekR1**(`question`, `useWebSearch`): `Promise`\<[`GradioChatOutput`](../interfaces/GradioChatOutput.md)\>

Defined in: src/deepseek-r1/deepseek.ts:57

Sends a user question to a remote AI model hosted via Gradio on Hugging Face,
and listens for the final generated response using Server-Sent Events (SSE).

This function handles:
- Constructing the correct Gradio payload
- Managing session identification
- Establishing a streaming connection for the response
- Resolving or rejecting based on the backend state

## Parameters

### question

`string`

The user's prompt or message to send to the AI.

### useWebSearch

`boolean` = `false`

Optional flag (default `false`) to enable enhanced web search in the AI model.

## Returns

`Promise`\<[`GradioChatOutput`](../interfaces/GradioChatOutput.md)\>

A promise that resolves with the AI-generated response once processing completes.

## Throws

An error if the HTTP request fails or if the event stream encounters an issue.
