import { z } from 'zod';

/**
 * @module TextCraftClient
 * @description
 * Fully customizable, typed client for interacting with the TextCraft.net API to generate
 * Minecraft-style logo images. Supports default settings and per-request overrides.
 */

/**
 * Advanced config schema (style overrides).
 */
declare const TextCraftOptionsSchema: z.ZodObject<{
    fontStyle: z.ZodOptional<z.ZodString>;
    fontStyle2: z.ZodOptional<z.ZodString>;
    fontStyle3: z.ZodOptional<z.ZodString>;
    fontSize: z.ZodOptional<z.ZodString>;
    fontSize2: z.ZodOptional<z.ZodString>;
    fontSize3: z.ZodOptional<z.ZodString>;
    fontColour: z.ZodOptional<z.ZodString>;
    fontColour2: z.ZodOptional<z.ZodString>;
    fontColour3: z.ZodOptional<z.ZodString>;
    borderColour: z.ZodOptional<z.ZodString>;
    borderColour2: z.ZodOptional<z.ZodString>;
    borderColour3: z.ZodOptional<z.ZodString>;
    dropShadow: z.ZodOptional<z.ZodBoolean>;
    glossy: z.ZodOptional<z.ZodBoolean>;
    lighting: z.ZodOptional<z.ZodBoolean>;
    glitterBorder: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
/**
 * Combined full input shape.
 */
declare const TextCraftInputSchema: z.ZodObject<{
    text: z.ZodString;
    text2: z.ZodOptional<z.ZodString>;
    text3: z.ZodOptional<z.ZodString>;
    fontStyle: z.ZodOptional<z.ZodString>;
    fontStyle2: z.ZodOptional<z.ZodString>;
    fontStyle3: z.ZodOptional<z.ZodString>;
    fontSize: z.ZodOptional<z.ZodString>;
    fontSize2: z.ZodOptional<z.ZodString>;
    fontSize3: z.ZodOptional<z.ZodString>;
    fontColour: z.ZodOptional<z.ZodString>;
    fontColour2: z.ZodOptional<z.ZodString>;
    fontColour3: z.ZodOptional<z.ZodString>;
    borderColour: z.ZodOptional<z.ZodString>;
    borderColour2: z.ZodOptional<z.ZodString>;
    borderColour3: z.ZodOptional<z.ZodString>;
    dropShadow: z.ZodOptional<z.ZodBoolean>;
    glossy: z.ZodOptional<z.ZodBoolean>;
    lighting: z.ZodOptional<z.ZodBoolean>;
    glitterBorder: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type TextCraftInput = z.infer<typeof TextCraftInputSchema>;
/**
 * Optional config passed when constructing the TextCraftClient
 */
interface TextCraftClientOptions {
    baseURL?: string;
    defaultStyle?: Partial<z.infer<typeof TextCraftOptionsSchema>>;
}
/**
 * TextCraft image generation client (configurable and reusable).
 */
declare class TextCraftClient {
    private readonly endpoint;
    private readonly defaultStyle;
    constructor(options?: TextCraftClientOptions);
    /**
     * Generate a Minecraft-style image using text and optional styles.
     * @param input - Required text and optional style overrides.
     * @returns Promise<string> - Direct URL to the generated image.
     */
    generateImage(input: TextCraftInput): Promise<string>;
}

/**
 * @module TMateClient
 * @description
 * A scraper-based client for interacting with the https://tmate.cc TikTok download service.
 * It simulates browser-like behavior to extract direct download links for MP4 (no watermark),
 * MP3 audio, or image slideshows using HTTP cookies, CSRF token handling, and HTML parsing.
 */
/**
 * Common download link shape returned from parsed HTML anchors.
 */
interface DownloadLink {
    href: string;
    label: string;
}
/**
 * Result structure if a video is found.
 */
interface VideoResult {
    type: 'video';
    title: string;
    mp4Links: DownloadLink[];
    mp3Link?: DownloadLink;
}
/**
 * Result structure if images are found (image slides / carousel).
 */
interface ImageResult {
    type: 'image';
    title: string;
    images: string[];
    mp3Link?: DownloadLink;
}
type TikTokResult = VideoResult | ImageResult;
/**
 * Retry options for failed requests.
*/
interface RetryOptions {
    retries?: number;
    delayMs?: number;
}
/**
 * Downloads TikTok content via tmate.cc by submitting a URL and scraping response data.
 *
 * @param tiktokUrl - Full TikTok video or image post URL.
 * @param retryOptions - Retry options for failed requests (default: { retries: 3, delayMs: 1000 }).
 * @returns TikTokResult object containing video, image, or audio links.
 * @throws Error if token, HTML content, or links are missing or invalid.
 */
declare function downloadTikTok(tiktokUrl: string, retryOptions?: RetryOptions): Promise<TikTokResult>;

/**
 * Interface representing the expected structure of the payload
 * sent to the Gradio queue endpoint.
 */
interface ChatPayload {
    data: [string, unknown[], boolean];
    event_data: null;
    fn_index: number;
    session_hash: string;
}
/**
 * Represents the shape of a streamed message returned by Gradio’s EventSource.
 * Specifically for the DeepSeek chatbot's `process_completed` response format.
 */
interface GradioStreamMessage {
    msg: 'process_completed' | string;
    output?: GradioChatOutput;
    [key: string]: any;
}
/**
 * Represents the detailed structure of the `output` object returned by DeepSeek.
 */
interface GradioChatOutput {
    /**
     * The actual chat result, typically an array containing:
     *   [ [ [inputText, responseText] ], "" ]
     */
    data: [[[input: string, response: string]], string];
    is_generating: boolean;
    duration: number;
    average_duration: number;
    render_config: any;
    changed_state_ids: string[];
}
/**
 * Sends a user question to a remote AI model hosted via Gradio on Hugging Face,
 * and listens for the final generated response using Server-Sent Events (SSE).
 *
 * This function handles:
 * - Constructing the correct Gradio payload
 * - Managing session identification
 * - Establishing a streaming connection for the response
 * - Resolving or rejecting based on the backend state
 *
 * @param question - The user's prompt or message to send to the AI.
 * @param useWebSearch - Optional flag (default `false`) to enable enhanced web search in the AI model.
 * @returns A promise that resolves with the AI-generated response once processing completes.
 * @throws An error if the HTTP request fails or if the event stream encounters an issue.
 */
declare function DeepseekR1(question: string, useWebSearch?: boolean): Promise<GradioChatOutput>;

/**
 * Options used to describe the logo prompt.
 */
interface LogoRequestOptions {
    style: string;
    color: string;
    concept: string;
    text: string;
    background: string;
}
/**
 * Represents the full response returned when logo generation completes successfully.
 */
interface FantaxyCompletedResponse {
    msg: 'process_completed';
    event_id: string;
    output: FantaxyOutput;
    success: boolean;
    title: string | null;
}
/**
 * The `output` field containing the generated logo data and metadata.
 */
interface FantaxyOutput {
    data: [LogoFileData, number];
    is_generating: boolean;
    duration: number;
    average_duration: number;
    render_config: any;
    changed_state_ids: string[];
}
/**
 * The logo file metadata returned by Gradio.
 */
interface LogoFileData {
    path: string;
    url: string;
    size: number | null;
    orig_name: string;
    mime_type: string | null;
    is_stream: boolean;
    meta: {
        _type: 'gradio.FileData';
    };
}
/**
 * Main entry point to generate a logo in a single call.
 * Combines the prompt generation and streaming response into one flow.
 *
 * @param options - Logo prompt description
 * @returns Final response payload containing the generated asset URL
 */
declare function generateLogo(options: LogoRequestOptions): Promise<FantaxyCompletedResponse>;

/**
 * Options for image enhancement.
 */
interface EnhanceImageOptions {
    /**
     * Image input buffer or file path.
     */
    image: Buffer | string;
    /**
     * Optional flag to save the enhanced image locally.
     */
    saveToFile?: boolean;
    /**
     * Optional output directory if saving to file.
     */
    outputDir?: string;
}
/**
 * Sends an image to ihancer.com for enhancement and returns the enhanced image as a Buffer.
 *
 * @param options - EnhanceImageOptions with image buffer or path, and save flags
 * @returns Buffer of the enhanced image
 */
declare function enhanceImage(options: EnhanceImageOptions): Promise<Buffer>;

/**
 * Supported content categories on MCPEDL.
 */
type McpedlCategory = 'downloading' | 'mods' | 'maps' | 'textures' | 'shaders';
/**
 * Represents a single post (mod, map, etc.) scraped from MCPEDL.
 */
interface McpedlEntry {
    title: string;
    link: string;
}
/**
 * Map user-friendly category keys to actual URL slugs on mcpedl.org.
 */
declare const categoryMap: Record<McpedlCategory, string>;
/**
 * Search a list of article titles and links from MCPEDL.org for a given category and page.
 *
 * @param category - The content category (mods, maps, textures, etc.)
 * @param page - The page number to scrape (starting from 1)
 * @returns A list of articles with titles and URLs
 */
declare function McpedlSearch(category: McpedlCategory, page?: number): Promise<McpedlEntry[]>;

/**
 * Basic anime metadata returned by most endpoints.
 */
interface Anime {
    id: string;
    title: string;
    image: string;
    type: string;
    status: string;
    description?: string;
    [key: string]: any;
}
/**
 * Episode object associated with a specific anime.
 */
interface Episode {
    id: string;
    number: number;
    title?: string;
    [key: string]: any;
}
/**
 * Server descriptor for streaming.
 */
interface StreamServer {
    serverName: string;
    type: string;
    [key: string]: any;
}
/**
 * Video stream metadata (sources, headers, etc.)
 */
interface StreamResponse {
    sources: {
        url: string;
        quality: string;
        isM3U8: boolean;
    }[];
    headers?: Record<string, string>;
    intro?: {
        start: number;
        end: number;
    };
}
/**
 * Animob API Client
 *
 * A class-based wrapper around unofficial HiAnime/AniWatch APIs, giving you access to:
 * - Homepage featured anime
 * - Search and filter by genre
 * - Retrieve full anime info and episodes
 * - Extract streaming links from server ID
 *
 * Example usage:
 * ```ts
 * const client = new Animob();
 * const popular = await client.home();
 * const naruto = await client.search('naruto');
 * const detail = await client.detail('naruto');
 * const stream = await client.episode('naruto-ep-1?ep=1', 'HD-1');
 * ```
 */
declare class Animob {
    private client;
    private _client;
    constructor();
    /**
     * Fetches curated content from the homepage: trending, latest, popular, etc.
     * @returns List of homepage anime blocks
     */
    home(): Promise<Anime[]>;
    /**
     * Retrieves a paginated list of anime for a specific genre.
     * @param genre - Genre slug (e.g. 'action', 'drama', 'fantasy')
     * @param page - Page number for pagination
     * @returns List of anime under the selected genre
     * @throws Error if the genre is not supported
     */
    genre(genre?: string, page?: number): Promise<Anime[]>;
    /**
     * Searches anime using a keyword.
     * @param query - The title or keyword to search for
     * @param page - Page number for pagination
     * @returns List of matching anime
     * @throws Error if no query is provided
     */
    search(query: string, page?: number): Promise<Anime[]>;
    /**
     * Fetches full metadata for a specific anime, including all episodes.
     * @param id - Anime slug ID (e.g. 'naruto')
     * @returns Anime metadata object with attached episodes
     * @throws Error if ID is not provided
     */
    detail(id: string): Promise<Anime & {
        episodes: Episode[];
    }>;
    /**
     * Fetches streaming sources for a given episode ID and server name.
     * @param episodeId - Full episode ID string (e.g. 'bleach-ep-1?ep=1')
     * @param server - Server name (e.g. 'HD-1', 'HD-2', 'Auto')
     * @returns StreamResponse with sources and headers
     * @throws If episode ID is invalid or server does not exist
     */
    episode(episodeId: string, server?: string): Promise<StreamResponse>;
}

/**
 * Represents a news article item extracted from the API.
 */
interface MobileLegendsNewsItem {
    title: string;
    author: string | null;
    avatar: string | null;
    thumbnail: string | null;
    date: string;
    caption: string;
    link: string;
}
/**
 * Fetches and combines news from all known Mobile Legends news sources.
 *
 * @returns News response object with metadata and article list
 */
declare function MobileLegendsNewsInfo(): Promise<{
    status: boolean;
    total: number;
    result: MobileLegendsNewsItem[];
}>;

/**
 * The actual email record returned after creation.
 */
interface TempMailCreateData {
    email: string;
    email_token: string;
    deleted_in: string;
}
/**
 * The `result` structure in create() response.
 */
interface TempMailCreateResult {
    status: 'success' | 'error';
    data: TempMailCreateData;
}
/**
 * Response type returned from the Tempail API for both endpoints.
 */
interface TempMailResponse<T> {
    success: boolean;
    code: number;
    result: T;
}
/**
 * Raw email message shape returned by the inbox endpoint.
 */
interface TempMailMessage {
    from: string;
    subject: string;
    body: string;
    date: string;
    id: string;
    [key: string]: any;
}
/**
 * Tempail Temporary Email SDK
 * Provides access to temp email creation and inbox message reading
 * via the unofficial API: https://tempail.top
 */
declare class TempMail {
    private static baseHeaders;
    /**
     * Generates a new temporary email address.
     *
     * @returns {Promise<TempMailResponse>} An object with a generated email address and token.
     * @throws On HTTP or parsing errors.
     */
    static create(): Promise<TempMailResponse<TempMailCreateResult>>;
    /**
     * Fetches inbox messages for a specific temp email token.
     *
     * @param token - Unique token tied to the generated email address
     * @returns {Promise<TempMailResponse<TempMailMessage[]>>} List of inbox messages
     * @throws If token is invalid or request fails
     */
    static checkInbox(token: string): Promise<TempMailResponse<TempMailMessage[]>>;
}

/**
 * Sends a prompt to MagicStudio's AI art generator and uploads the result to Catbox.
 *
 * @param prompt - Description of the image you want MagicStudio to generate
 * @returns A URL pointing to the uploaded image on catbox.moe
 */
declare function MagicStudioArt(prompt: string): Promise<string>;

/**
 * Video/audio representation extracted from DASH manifest.
 */
interface MediaTrack {
    url: string;
    bandwidth: number;
    codecs: string;
    mimeType: string;
    resolution?: string;
    qualityLabel?: string;
}
/**
 * Instagram video metadata object.
 */
interface InstagramMedia {
    code: string;
    id: string;
    title: string;
    profile: {
        username: string;
        full_name: string;
        profile_pic_url: string;
    };
    thumbnails: {
        url: string;
        width: number;
        height: number;
    }[];
    videoTracks: MediaTrack[];
    audioTracks: MediaTrack[];
}
/**
 * Extracts Instagram reel video + audio stream URLs and metadata.
 *
 * @param url Instagram reel/post URL
 * @returns Structured InstagramMedia object
 */
declare function instagram(url: string): Promise<InstagramMedia>;

/**
 * Structured reference object returned by AnimeFinder API.
 */
interface AnimeReference {
    site: string;
    url: string;
}
/**
 * Structured result returned by AnimeFinder API.
 */
interface AnimeFinderResult {
    status: true;
    image: string;
    anime: string;
    character: string;
    genres: string;
    premiere: string;
    production: string;
    description: string;
    synopsis: string;
    references: AnimeReference[];
}
/**
 * Fallback error result if identification fails.
 */
interface AnimeFinderError {
    status: false;
    message: string;
    error: any;
}
type AnimeFinderResponse = AnimeFinderResult | AnimeFinderError;
/**
 * Identifies an anime by analyzing an image URL using AnimeFinder API.
 *
 * @param imageUrl - The public URL of the image (JPG/PNG)
 * @returns Structured anime info or error response
 */
declare function AnimeFinder(imageUrl: string): Promise<AnimeFinderResponse>;

/**
 * Enumeration of all supported poem structures/styles.
 * These reflect classic and modern poetic forms used globally.
 */
declare const poemTypes: readonly ["Haiku", "Sonnet", "Free Verse", "Blank Verse", "Limerick", "Romantic", "Proposal", "Love", "Lyric", "Acrostic", "Ballad", "Epic", "Elegy", "Ode", "Pantoum", "Narrative", "Cinquain", "Villanelle", "Sestina", "Couplet"];
type PoemType = (typeof poemTypes)[number];
/**
 * Supported output languages for the poem.
 */
declare const poemLanguages: readonly ["English", "Japanese", "Indonesian"];
type PoemLanguage = (typeof poemLanguages)[number];
/**
 * Available length configurations.
 */
declare const poemLengths: readonly ["short", "medium", "long"];
type PoemLength = (typeof poemLengths)[number];
/**
 * Configuration object for poem generation.
 */
interface GeneratePoemOptions {
    topic?: string;
    length?: PoemLength;
    type?: PoemType;
    lang?: PoemLanguage;
}
/**
 * Returned when the generation is successful.
 */
interface PoemSuccess {
    status: true;
    result: string;
}
/**
 * Returned when poem generation fails.
 */
interface PoemError {
    status: false;
    message: string;
    error: any;
}
/**
 * General return type for generatePoem
 */
type PoemResponse = PoemSuccess | PoemError;
/**
 * Generates a structured, themed poem using https://aipoemgenerator.io
 *
 * Under the hood, it simulates a browser session to:
 *  1. Fetch the CSRF token and session cookie from the homepage
 *  2. Submit a POST form with your chosen poem parameters
 *
 * @param options - Configuration including topic, length, type, and language
 * @returns A PoemResponse, containing either the text or an error
 *
 * @example
 * const poem = await generatePoem({
 *   topic: "starfall",
 *   type: "Haiku",
 *   lang: "English",
 *   length: "short"
 * });
 */
declare function PoemGenerator({ topic, length, type, lang }?: GeneratePoemOptions): Promise<PoemResponse>;

/**
 * Main Felo AI search method.
 * Streams response from felo.ai and combines it with DuckDuckGo references.
 *
 * @param prompt - The user's search query
 * @returns Formatted string combining AI result + references
 */
declare function FeloSearch(prompt: string): Promise<string>;

/**
 * Represents a sticker pack with title and URL.
 */
interface StickerPack {
    title: string;
    url: string;
}
/**
 * Searches for sticker packs by query keyword.
 * @param query - Search keyword (e.g., "gura")
 * @returns List of sticker packs with title + URL
 */
declare function searchSticker(query: string): Promise<StickerPack[]>;
/**
 * Scrapes all sticker image links from a sticker pack page.
 * @param packUrl - Full URL of the sticker pack
 * @returns List of direct image URLs (PNG/WebP)
 */
declare function getStickersFromPack(packUrl: string): Promise<string[]>;

/**
 * Represents a downloadable media format (video or audio).
 */
interface MediaFormat {
    url: string;
    quality: string;
    ext: string;
    size: string;
    hasAudio?: boolean;
}
/**
 * Contains basic metadata about the video.
 */
interface Metadata {
    title: string;
    duration: string;
    thumbnail: string | null;
}
/**
 * Final structured output returned by the scraper.
 */
interface ScrapeResult {
    status: 'success';
    metadata: Metadata;
    downloads: {
        video: MediaFormat[];
        audio: MediaFormat[];
    };
}
/**
 * Extracts all downloadable media formats and metadata from a YouTube video using ssyoutube.rip backend.
 *
 * @param youtubeUrl - The full URL to the YouTube video.
 * @returns An object containing metadata and download links, or throws on failure.
 */
declare function ytdl(youtubeUrl: string): Promise<ScrapeResult>;

export { type Anime, AnimeFinder, type AnimeFinderError, type AnimeFinderResult, type AnimeReference, Animob, type ChatPayload, DeepseekR1, type DownloadLink, type EnhanceImageOptions, type Episode, type FantaxyCompletedResponse, FeloSearch, type GradioChatOutput, type GradioStreamMessage, type ImageResult, type InstagramMedia, type LogoFileData, type LogoRequestOptions, MagicStudioArt, type McpedlCategory, type McpedlEntry, McpedlSearch, type MediaFormat, type MediaTrack, type Metadata, MobileLegendsNewsInfo, type MobileLegendsNewsItem, PoemGenerator, type RetryOptions, type ScrapeResult, type StickerPack, type StreamResponse, type StreamServer, TempMail, type TempMailCreateData, type TempMailCreateResult, type TempMailMessage, type TempMailResponse, TextCraftClient, type TextCraftInput, type TikTokResult, type VideoResult, categoryMap, downloadTikTok, enhanceImage, generateLogo, getStickersFromPack, instagram, poemLanguages, poemLengths, poemTypes, searchSticker, ytdl };
