[**Mika Scraper v1.1.2**](../README.md)

***

[Mika Scraper](../README.md) / McpedlSearch

# Function: McpedlSearch()

> **McpedlSearch**(`category`, `page`): `Promise`\<[`McpedlEntry`](../interfaces/McpedlEntry.md)[]\>

Defined in: src/mcpedl-search/mcpedl.ts:36

Search a list of article titles and links from MCPEDL.org for a given category and page.

## Parameters

### category

[`McpedlCategory`](../type-aliases/McpedlCategory.md)

The content category (mods, maps, textures, etc.)

### page

`number` = `1`

The page number to scrape (starting from 1)

## Returns

`Promise`\<[`McpedlEntry`](../interfaces/McpedlEntry.md)[]\>

A list of articles with titles and URLs
