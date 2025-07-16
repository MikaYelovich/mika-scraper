import { z } from 'zod';

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
/**
 * Structured result returned by AnimeFinder API.
 */
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

/**
 * Type for supported rewrite levels
 */
type RewriteLevel = 'standard' | 'enhanced' | 'aggressive';
/**
 * Fine-tuning flags for rewriting behavior
 */
interface RewriteSettings {
    removeUnicode?: boolean;
    dashesToCommas?: boolean;
    removeDashes?: boolean;
    transformQuotes?: boolean;
    removeWhitespace?: boolean;
    removeEmDash?: boolean;
    keyboardOnly?: boolean;
}
/**
 * Successful transformation response
 */
interface HumanizeSuccess {
    success: true;
    code: 200;
    level: RewriteLevel;
    result: {
        code: string;
        originalLength: number;
        transformedLength: number;
        reductionPercentage: string;
    };
}
/**
 * Failed transformation response
 */
interface HumanizeFailure {
    success: false;
    code: number;
    result: {
        error: string;
        isLevel?: RewriteLevel[];
    };
}
/**
 * Union type for all possible responses
 */
type HumanizeResult = HumanizeSuccess | HumanizeFailure;
/**
 * Rewrite AI-generated text to make it more human-sounding using UnaiMyText.
 *
 * @param text - Input text to be humanized (required)
 * @param level - Rewrite level: 'standard', 'enhanced', or 'aggressive'
 * @param settings - Optional custom settings to override default rewriting behavior
 *
 * @returns A structured object indicating success/failure and rewritten content
 */
declare function humanizeText(text: string, level?: RewriteLevel, settings?: RewriteSettings): Promise<HumanizeResult>;

/** Predefined aspect ratios allowed by AI Freebox API */
type SupportedAspectRatios = '1:1' | '2:3' | '9:16' | '16:9';
/** Predefined slug values representing the generation model */
type SupportedSlugs = 'ai-art-generator' | 'ai-fantasy-map-creator' | 'ai-youtube-thumbnail-generator' | 'ai-old-cartoon-characters-generator';
/** Params object for AIFreeboxImage function */
interface AIFreeboxImageParams {
    prompt: string;
    aspectRatio?: SupportedAspectRatios;
    slug?: SupportedSlugs;
}
/**
 * Generates an image using the AI Freebox API.
 *
 * @param {string} prompt - The prompt describing the image content.
 * @param {SupportedAspectRatios} aspectRatio - The desired aspect ratio of the image.
 * @param {SupportedSlugs} slug - The category or model used for generation.
 *
 * @returns {Promise<string>} The URL of the generated image.
 *
 * @throws Will throw an error if the aspectRatio or slug is invalid, or if the API fails.
 */
declare function AIFreeboxImage(prompt: string, aspectRatio?: SupportedAspectRatios, slug?: SupportedSlugs): Promise<string>;

/**
 * Generates an image and text response from Gemini using prompt and base64 image.
 * @param prompt Text prompt to condition image generation
 * @param base64Image Base64-encoded image data
 * @param mimeType MIME type (e.g., "image/png")
 * @returns Object containing image buffer and textual response
 */
declare function GeminiCanvas(prompt: string, base64Image: string, mimeType: string, apiKey: string): Promise<{
    imageBuffer?: Buffer;
    textResponse?: string;
}>;

/**
 * generate text response from Gemini
 * @param prompt Text prompt to condition image generation
 * @returns Object containing textual response
 */
declare function GeminiChat(prompt: string): Promise<string | undefined>;

/**
 * Available Studio Ghibli art styles.
 */
type GhibliStyle = 'Spirited Away' | "Howl's Castle" | 'Princess Mononoke' | 'Totoro';
/**
 * Input options for generating a Ghibli-style image.
 */
interface GhibliGenerationOptions {
    prompt: string;
    style: GhibliStyle;
}
/**
 * Generates an image using the Ghibli AI Image Generator and uploads it to Catbox.
 *
 * @param options - Contains the prompt and Ghibli style to use.
 * @returns A publicly accessible URL of the generated image.
 * @throws Error if the generation or upload process fails.
 */
declare function TextToGhibli(options: GhibliGenerationOptions): Promise<string>;

/**
 * Minecraft player name history entry
 */
interface NameHistoryEntry {
    name: string;
    changedToAt?: string;
}
/**
 * Minecraft player profile
 */
interface MinecraftProfile {
    username: string;
    id: string;
    short_id: string;
    raw_id: string;
    avatar: string;
    skin_texture: string;
    name_history: NameHistoryEntry[];
    head_preview: string;
    full_body_preview_hd: string;
    skin_download: string;
    qr_uuid: string;
    profile_valid: boolean;
    skin_model: string;
    namemc_url: string;
}
/**
 * Minecraft player profile result
 */
interface MinecraftStalkResult {
    status: number;
    data?: MinecraftProfile;
    error?: string;
    reason?: string;
}
/**
 * Fetch Minecraft player profile from PlayerDB and Mojang APIs.
 * @param username Minecraft username (case-insensitive)
 * @returns Minecraft profile or descriptive error object
 */
declare function MinecraftStalk(username: string): Promise<MinecraftStalkResult>;

/**
 * src/nakanime.ts
 * Provides methods to fetch anime data from Nakanime API
 */
/**
 * Interface definitions for Nakanime scraper API responses.
 */
interface AnimeData {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    type: string | null;
    url: string;
    status: string;
}
/**
 * Genre data interface
 */
interface GenreData {
    id: number;
    name: string;
    slug: string;
}
/**
 * Search result interface
 */
interface SearchResult {
    data: AnimeData[];
}
/**
 * Genre list interface
 */
interface GenreList {
    data: GenreData[];
}
/**
 * Class for accessing anime data from Nakanime unofficial API.
 */
declare class Nakanime {
    private client;
    constructor();
    /**
     * Get anime list sorted by order type.
     * @param order Sorting method ('title', 'latest', 'popular', etc.)
     * @param page Page number
     */
    get(order?: string, page?: number): Promise<SearchResult>;
    /**
     * Get anime list by genre
     * @param genre Genre slug (e.g., 'action', 'comedy')
     * @param page Page number
     */
    genre(genre: string, page?: number): Promise<any>;
    /**
     * Search anime by keyword
     * @param query Search term
     */
    search(query: string): Promise<SearchResult>;
    /**
     * Get anime detail from URL
     * @param url Anime detail page URL
     */
    getDetail(url: string): Promise<any>;
    /**
     * Get episode data from URL
     * @param url Episode URL
     */
    getData(url: string): Promise<any>;
}

/**
 * Interface untuk input transformasi gambar menggunakan DeepfakeMaker.io
 */
interface DeepfakeInput {
    buffer: Buffer;
    prompt: string;
}
/**
 * Interface untuk pesan WebSocket
 */
interface WebSocketMessage {
    msg: string;
    output?: {
        result: string[];
    };
}
/**
 * Melakukan transformasi gambar menggunakan DeepfakeMaker.io
 * @param input Objek berisi buffer dan prompt
 * @param input.buffer Buffer dari gambar yang akan diubah
 * @param input.prompt Prompt deskriptif untuk mengganti pakaian (termasuk NSFW)
 * @returns URL hasil deepfake yang dihasilkan
 */
declare function deepfakeTransform({ buffer, prompt, }: DeepfakeInput): Promise<string>;

/**
 * Object containing song title, artist, url and cleaned lyrics
 */
interface LyricsResult {
    title: string;
    artist: string;
    lyrics: string;
    url: string;
}
/**
 * Fetch lyrics and metadata for a given song query from songtexte.com
 *
 * @param query The song name or artist and title to search
 * @returns Object containing song title, artist, url and cleaned lyrics
 * @throws If no result or network/scrape failure occurs
 */
declare function SearchLyrics(query: string): Promise<LyricsResult>;

/**
 * Options required to generate a prompt from an image.
 */
interface ImageToPromptOptions {
    imageUrl: string;
    imageBuffer?: Buffer;
}
/**
 * Expected response from NeuralFrames API.
 */
interface NeuralFramesResponse {
    prompt: string;
    [key: string]: any;
}
/**
 * Uploads an image (either from a URL or a raw Buffer) to NeuralFrames'
 * CLIP Interrogate endpoint and returns an AI-generated textual prompt.
 *
 * @param options - The input options containing either a URL or Buffer.
 * @returns A promise resolving to the AI-generated prompt.
 * @throws Error if both input types are missing or the API fails.
 */
declare function imageToPrompt(options: ImageToPromptOptions): Promise<NeuralFramesResponse>;

/**
 * Structure of successful video extraction result.
 */
interface SnackVideoSuccess {
    status: true;
    video: string;
}
/**
 * Structure of a failed video extraction attempt.
 */
interface SnackVideoFailure {
    status: false;
    message: string;
}
/**
 * Unified type for the result.
 */
type SnackVideoResult = SnackVideoSuccess | SnackVideoFailure;
/**
 * Downloads video data from a SnackVideo URL using snackdownloader.com's public API.
 *
 * @param url - A valid SnackVideo video link.
 * @returns An object indicating success/failure and the video download URL or error message.
 */
declare function downloadSnackVideo(url: string): Promise<SnackVideoResult>;

/**
 * Uploads a given image buffer to Catbox for public access.
 *
 * @param buffer - The image file buffer.
 * @param filename - Name to assign to the file on Catbox.
 * @returns A public Catbox URL pointing to the uploaded image.
 */
declare function uploadToCatbox(buffer: Buffer, filename: string): Promise<string>;

/**
 * Represents a single guess-the-flag question.
 */
interface FlagQuestion {
    imageUrl: string;
    correctCountry: string;
    options: string[];
}
/**
 * Fetches and constructs a "Guess the Flag" question using real-time country data
 * from the RESTCountries API.
 *
 * @returns A `FlagQuestion` object containing flag image URL, correct answer, and options.
 */
declare function GuessTheFlag(): Promise<FlagQuestion>;

/**
 * Fetches a response from gptonline.ai via simulated user message.
 * @param message - The user's message to send to GPT Online
 * @returns The AI's response as a string
 */
declare function ChatGPTOnline(message: string): Promise<string>;
/**
 * Edits an image using the OpenAI DALL-E image editing API.
 *
 * @param imageUrl The URL of the image to be edited.
 * @param prompt The text prompt describing the desired edit.
 * @param apiKey (Optional) Your OpenAI API key. If not provided, it will look for OPENAI_API_KEY in environment variables.
 * @returns A Promise that resolves with the base64 encoded edited image, or null if an error occurs.
 * @throws Will throw an error if the image download fails, API request fails, or no base64 image is returned.
 */
declare function GPTImageCanvas(imageUrl: string, prompt: string, apiKey?: string): Promise<string | null>;

/**
 * Interface for Tokopedia product object.
 */
interface TokopediaProduct {
    id: string;
    name: string;
    url: string;
    price: {
        text: string;
        number: number;
    };
    mediaURL: {
        image: string;
    };
    shop: {
        name: string;
        city: string;
    };
}
/**
 * Scrape Tokopedia search results using GraphQL API.
 * @param query - Product keyword to search.
 * @returns Array of product objects.
 */
declare const TokopediaSearch: (query: string) => Promise<TokopediaProduct[]>;

/**
 * nsfwModels supported
 */
declare const nsfwModels: {
    flux: string;
    artist: string;
    anime: string;
    realistic: string;
    realistic_v2: string;
    nsfw_anime: string;
};
/**
 * styles supported
 */
declare const nsfwStyles: string[];
/**
 * ratios supported
 */
declare const nsfwRatios: {
    '1:1': {
        width: number;
        height: number;
    };
    '3:4': {
        width: number;
        height: number;
    };
    '4:3': {
        width: number;
        height: number;
    };
    '4:5': {
        width: number;
        height: number;
    };
    '5:4': {
        width: number;
        height: number;
    };
    '9:16': {
        width: number;
        height: number;
    };
    '16:9': {
        width: number;
        height: number;
    };
};
/**
 * Options for text2nsfw
 */
interface Text2NSFWOptions {
    base_model?: keyof typeof nsfwModels;
    style?: string;
    ratio?: keyof typeof nsfwRatios;
}
/**
 * Generate NSFW-styled artwork based on text prompt
 * @param prompt - Textual description of the desired image
 * @param options - Optional model/style/ratio parameters
 * @returns Array of image URLs
 */
declare function text2nsfw(prompt: string, { base_model, style, ratio, }?: Text2NSFWOptions): Promise<string[]>;

/**
 * Response for an AI-powered image filter
 */
interface FilterConfig {
    name: string;
    prompt: string;
    description: string;
}
/**
 * Input for applying an AI-powered image filter
 */
interface ApplyFilterInput {
    filter: keyof typeof MikaFilterImage.availableFilters;
    base64Image: string;
}
/**
 * Output from applying an AI-powered image filter
 */
interface ApplyFilterOutput {
    imageBuffer?: Buffer;
    textResponse?: string;
}
/**
 * A service that applies AI-powered image filters
 */
declare class MikaFilterImage {
    /**
     * Static registry of supported filters with prompt definitions.
     */
    static availableFilters: Record<string, FilterConfig>;
    /**
     * Apply a registered filter to a base64-encoded image.
     * @param input Input including the base64-encoded image and the filter name.
     * @returns Image buffer and text response
     */
    static applyFilter(input: ApplyFilterInput): Promise<ApplyFilterOutput>;
    /**
     * Get metadata about available filters.
     * @returns A list of filter names and their descriptions.
     */
    static getFilters(): FilterConfig[];
}

interface InternalChaiChatRequest {
    messages: {
        role: 'system' | 'user' | 'assistant';
        content: string;
    }[];
}
interface ChaiChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}
interface ChaiChatChoice {
    message: ChaiChatMessage;
    index: number;
    finish_reason: string;
}
interface ChaiChatSuccessResponse {
    ok: true;
    choices: ChaiChatChoice[];
    created?: number;
    model?: string;
}
interface ChaiChatErrorResponse {
    ok: false;
    message: string;
    creator?: string;
}
type ChaiChatApiResponse = ChaiChatSuccessResponse | ChaiChatErrorResponse;
/**
 * Sends a chat request with super high quality and returns the structured response.
 * @param {InternalChaiChatRequest} input - The chat request payload
 * @returns {Promise<ChaiChatSuccessResponse | ChaiChatErrorResponse>}
 */
declare function MikaChat(input: InternalChaiChatRequest): Promise<ChaiChatSuccessResponse | ChaiChatErrorResponse>;

/**
 * Represents a chat message.
 */
interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    id: string;
}
/**
 * Payload sent to Blackbox AI API.
 */
interface BlackboxPayload {
    messages: ChatMessage[];
    id: string;
    codeModelMode: boolean;
    trendingAgentMode: object;
    isMicMode: boolean;
    maxTokens: number;
    isChromeExt: boolean;
    githubToken: string;
    clickedForceWebSearch: boolean;
    visitFromDelta: boolean;
    isMemoryEnabled: boolean;
    mobileClient: boolean;
    validated: string;
    imageGenerationMode: boolean;
    webSearchModePrompt: boolean;
    deepSearchMode: boolean;
    vscodeClient: boolean;
    codeInterpreterMode: boolean;
    customProfile: {
        name: string;
        occupation: string;
        traits: string[];
        additionalInfo: string;
        enableNewChats: boolean;
    };
    webSearchModeOption: {
        autoMode: boolean;
        webMode: boolean;
        offlineMode: boolean;
    };
    isPremium: boolean;
    beastMode: boolean;
    designerMode: boolean;
    asyncMode: boolean;
}
/**
 * Sends a message to the Blackbox AI API and returns a formatted result.
 * @param text - The user input for the AI to process.
 * @param overrides - Optional overrides for the BlackboxPayload.
 * @returns A cleaned and formatted AI response string.
 */
declare function BlackboxChat(text: string, overrides?: Partial<BlackboxPayload>): Promise<string>;

/**
 * Represents the payload required to request a screenshot from Imagy API.
 */
interface ScreenshotRequest {
    url: string;
    browserWidth?: number;
    browserHeight?: number;
    fullPage?: boolean;
    deviceScaleFactor?: number;
    format?: 'png' | 'jpeg';
}
/**
 * Represents a successful screenshot API response.
 */
interface ScreenshotResponseSuccess {
    id: string;
    fileUrl: string;
    success: true;
}
/**
 * Represents a failed screenshot attempt.
 */
interface ScreenshotResponseError {
    success: false;
    error: string;
}
/**
 * Combined response type: either success or failure.
 */
type ScreenshotResponse = ScreenshotResponseSuccess | ScreenshotResponseError;
/**
 * Capture a screenshot of the given URL using Imagy's public API.
 *
 * @param {string} url - The full URL of the web page to screenshot.
 * @returns {Promise<ScreenshotResponse>} The screenshot file URL or error message.
 *
 * @example
 * ```ts
 * const result = await ScreenshostWebsite('https://example.com');
 * if (result.success) {
 *   console.log(result.fileUrl);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
declare function ScreenshostWebsite(url: string): Promise<ScreenshotResponse>;

/**
 * Upload response from AI Vocal Remover API
 */
interface UploadResponse {
    file_name: string;
    key: string;
    error?: boolean;
    message?: string;
}
/**
 * Process response from AI Vocal Remover API
 */
interface ProcessResponse {
    vocal_path: string;
    instrumental_path: string;
    error?: boolean;
    message?: string;
}
/**
 * Handles interaction with the AI Vocal Remover API.
 * Provides methods for uploading and processing audio files.
 */
declare class VocalRemover {
    private readonly uploadUrl;
    private readonly processUrl;
    /**
     * Uploads an audio file to AI Vocal Remover.
     * @param filePath - Local path to the audio file.
     * @returns Promise resolving to upload response (file_name + key)
     * @throws Error if the upload fails
     * @example
     * const vr = new VocalRemover()
     * const uploaded = await vr.upload('./song.mp3')
     */
    upload(filePath: string): Promise<UploadResponse>;
    /**
     * Processes the uploaded file to split vocals and instrumental.
     * @param upload UploadResponse containing file_name and key.
     * @returns Promise resolving to ProcessResponse with audio URLs.
     * @throws Error if the processing fails
     * @example
     * // uploaded = upload step vr.upload()
     * const result = await vr.process(uploaded)
     */
    process(upload: UploadResponse): Promise<ProcessResponse>;
    /**
     * One-liner: Uploads and processes the audio in a single step.
     * @param filePath Path to the local audio file.
     * @returns ProcessResponse with vocal & instrumental URLs
     * @example
     * const result = await vr.run('./song.mp3')
     */
    run(filePath: string): Promise<ProcessResponse>;
}

/**
 * Channel metadata returned from SocialCounts API
 */
interface ChannelInfo {
    id: string;
    title: string;
    avatar: string;
    banner: string;
    isBanner: boolean;
    subscriberCount: number;
}
/**
 * Formatted channel information
 */
interface ChannelFormatted {
    id: string;
    name: string;
    avatar: string;
    banner: string;
    hasBanner: boolean;
    subscribers: string;
}
/**
 * Subscriber statistics data
 */
interface SubscriberStats {
    estimated: string;
    fromApi: string;
}
/**
 * Composite response returned by YoutubeTracker
 */
interface YoutubeTrackResult {
    channel: ChannelFormatted;
    stats: SubscriberStats;
}
/**
 * Tracks YouTube channel statistics via SocialCounts API
 */
declare class YoutubeTracker {
    private readonly baseHeaders;
    /**
     * Formats number with thousand separators using dot notation.
     * @param num - Input number
     * @returns Formatted string with dots
     * @example
     * formatNumber(1234567) // "1.234.567"
     */
    private formatNumber;
    /**
     * Searches and retrieves YouTube channel subscriber data.
     * @param username - YouTube channel name or ID
     * @returns YoutubeTrackResult with formatted stats
     * @throws If channel is not found or API fails
     * @example
     * const yt = new YoutubeTracker()
     * const result = await yt.track('MrBeast')
     * console.log(result.channel.name)
     */
    track(username: string): Promise<YoutubeTrackResult>;
}

/**
 * Data returned by InfluencerMarketingHub for a TikTok user.
 */
interface TikTokStats {
    name: string;
    avatarBuffer: Buffer;
    followers: number;
    averageLikes: number;
    posts: number;
    earnings: string;
    engagement: string;
}
/**
 * TikTok earnings tracker class using InfluencerMarketingHub.com.
 */
declare class TiktokEarnings {
    private readonly baseUrl;
    /**
     * Fetch the required _wpnonce token for form submission.
     * @returns The _wpnonce string token.
     * @throws If token extraction fails.
     * @example
     * const nonce = await new TiktokEarnings().getNonce()
     */
    private getNonce;
    /**
     * Get TikTok user statistics and earnings estimation.
     * @param username TikTok username (without @)
     * @returns TikTokStats object
     * @example
     * const stats = await new TiktokEarnings().track('charlidamelio')
     * console.log(stats.name, stats.earnings)
     */
    track(username: string): Promise<TikTokStats>;
}

/**
 * Response structure from the flvto.online API.
 */
interface YTDL2Response {
    link: string;
    title: string;
    filesize: number;
    progress: number;
    duration: number;
    status: 'ok' | 'error';
    msg: string;
}
/**
 * Downloads a YouTube video as audio or video using flvto.online backend.
 */
declare class YTDL2 {
    private readonly apiEndpoint;
    /**
     * Fetches downloadable link and metadata from a video ID.
     * @param videoUrl YouTube video ID (e.g., "Ajxn0PKbv7I")
     * @param format Desired format ("mp3" | "mp4"). Defaults to "mp3"
     * @returns Parsed response including title, duration, and download link
     * @throws Error if request fails or API returns non-ok status
     * @example
     * const result = await new YTDL2().download('https://www.youtube.com/watch?v=0TR3_-Rz7t0')
     * console.log(result.title, result.link)
     */
    download(url: string, format?: 'mp3' | 'mp4'): Promise<YTDL2Response>;
    /**
     * Extracts the video ID from a full YouTube URL.
     * @param videoUrl - Any valid YouTube URL
     * @returns Video ID string (e.g., Ajxn0PKbv7I)
     * @throws Error if ID cannot be extracted
     * @example
     * const id = await new YTDL2().extractVideoId("https://www.youtube.com/watch?v=Ajxn0PKbv7I")
     */
    extractVideoId(videoUrl: string): string;
    /**
     * Downloads a YouTube video as mp3 or mp4 using the video URL.
     * @param videoUrl - Full YouTube video URL
     * @param format - Output format (mp3 or mp4)
     * @returns Download metadata from flvto.online
     * @throws Error if conversion fails
     * @example
     * const info = await new YTDL2().downloadByUrl('https://youtu.be/Ajxn0PKbv7I', 'mp3')
     */
    downloadByUrl(videoUrl: string, format?: 'mp3' | 'mp4'): Promise<YTDL2Response>;
}

/**
 * Interface representing credentials needed for Aliyun OSS upload.
 */
interface UploadCredentials {
    host: string;
    dir: string;
    accessId: string;
    policy: string;
    signature: string;
    callback: string;
    fileUrl: string;
}
/**
 * Main client for interacting with TranslateImage.app services.
 * Supports uploading, translating e-commerce product images, general OCR images, and manga panels.
 */
declare class TranslateImageClient {
    private readonly defaultHeaders;
    /**
     * Generates headers for HTTP requests.
     * Merges base headers with any additional fields passed in.
     * @param extra - Additional headers to include
     * @returns A merged headers object
     */
    private getHeaders;
    /**
     * Requests temporary credentials for uploading an image to Aliyun OSS.
     * @param fileName - Name of the file to upload (default: "image.jpg")
     * @param fileType - MIME type of the file (default: "image/jpeg")
     * @returns Promise resolving to UploadCredentials object
     * @throws Error if credentials cannot be retrieved
     * @example
     * const creds = await client.getUploadCredentials('product.png')
     */
    getUploadCredentials(fileName?: string, fileType?: string): Promise<UploadCredentials>;
    /**
     * Uploads a file to Aliyun OSS using provided credentials.
     * @param localPath - Full path to the local image file
     * @param credentials - UploadCredentials object received from getUploadCredentials()
     * @returns Public image URL after upload
     * @throws Error if upload fails
     * @example
     * const url = await client.uploadToAliyunOSS('./product.jpg', creds)
     */
    uploadToAliyunOSS(localPath: string, credentials: UploadCredentials): Promise<string>;
    /**
     * Submits an uploaded image URL for translation in e-commerce context.
     * Returns translated text and additional metadata.
     * @param imageUrl - Public image URL returned from upload
     * @param sourceLanguage - Language code of original text (default: 'auto')
     * @param targetLanguage - Desired output language (default: 'en')
     * @returns Translation result object
     * @example
     * const result = await client.translateEcommerce(url, 'ja', 'en')
     */
    translateEcommerce(imageUrl: string, sourceLanguage?: string, targetLanguage?: string): Promise<any>;
    /**
     * Submits a general image buffer for standard OCR translation.
     * @param buffer - Raw image buffer
     * @param filename - Filename to associate with the image
     * @param from - Source language (default: "auto")
     * @param to - Target language (default: "en")
     * @returns Translation response data
     * @example
     * const data = await client.translateImage(fs.readFileSync('ocr.jpg'), 'ocr.jpg')
     */
    translateImage(buffer: Buffer, filename: string, from?: string, to?: string): Promise<any>;
    /**
     * Submits an image for manga-specific translation.
     * Supports automatic panel detection and direction awareness.
     * @param buffer - Image buffer
     * @param filename - Name of the manga image file
     * @param from - Source language (default: "auto")
     * @param to - Target language (default: "ENG")
     * @returns Translation data including text regions and annotations
     * @example
     * const result = await client.translateManga(fs.readFileSync('manga.jpg'), 'manga.jpg')
     */
    translateManga(buffer: Buffer, filename: string, from?: string, to?: string): Promise<any>;
    /**
     * Helper method: Upload a file and return the final image URL.
     * This internally handles credential fetch and OSS upload.
     * @param localFilePath - Full path to local image file
     * @returns Final image URL
     * @example
     * const url = await client.uploadFile('./poster.jpg')
     */
    uploadFile(localFilePath: string): Promise<string>;
}

/**
 * Represents a single message exchanged in the chat session.
 */
interface Message {
    /** Sender of the message: 'user' or 'assistant' */
    role: 'user' | 'assistant';
    /** The message content */
    content: string;
    /** Optional timestamp in milliseconds since epoch */
    timestamp?: number;
}
/**
 * Response object returned from the `chat` method.
 */
interface ChatResponse {
    /** Indicates whether the operation was successful */
    success: boolean;
    /** HTTP-like status code */
    code: number;
    /** Result string (usually assistant's response or error) */
    result: string;
    /** Unique identifier of the chat session */
    sessionId?: string;
    /** ISO timestamp of session expiry */
    sessionExpiry?: string;
    /** Metadata about number of stored messages */
    messageCount?: {
        current: number;
        max: number;
    };
    /** Indicates whether this was a new session */
    isNewSession?: boolean;
    /** Indicates whether this was a follow-up message */
    isFollowUp?: boolean;
}
/**
 * Response object returned from the `generateImage` method.
 */
interface ImageResponse {
    /** Indicates whether image generation succeeded */
    success: boolean;
    /** HTTP-like status code */
    code: number;
    /** Description/content of the image (if available) */
    content?: string;
    /** Direct URL to the generated image */
    imageUrl?: string;
    /** Error details (if any) */
    result?: {
        error: string;
    };
}
/**
 * Response object returned from the `browsing` method.
 */
interface BrowseResponse {
    /** Indicates whether browsing succeeded */
    success: boolean;
    /** HTTP-like status code */
    code: number;
    /** Description/snapshot of the browsing result */
    description: string;
    /** Image-related prompt or preview (if available) */
    image: string;
    /** Relevant URLs or references */
    urls: string[];
    /** Suggested follow-up queries or insights */
    suggestions: string[];
}
/**
 * Response object returned from the `pdf2Text` method.
 */
interface PdfTextResponse {
    /** Indicates success or failure */
    success: boolean;
    /** Extracted text if successful */
    data?: string;
    /** Error message if failed */
    error?: string;
}
/**
 * Represents a session containing message history and timestamp.
 */
interface Session {
    /** Messages exchanged in the session */
    messages: Message[];
    /** Last time session was active (timestamp in ms) */
    lastActive: number;
}
/**
 * ChatUpAI SDK – Core wrapper for interacting with ChatUpAI.org API.
 *
 * Provides methods for:
 * - Chat completions
 * - Image generation
 * - Web browsing
 * - PDF-to-text extraction
 *
 * @example
 * ```ts
 * const response = await ChatUpAI.chat("Hello, what is AI?");
 * console.log(response.result);
 * ```
 */
declare class ChatUpAI {
    private static readonly headers;
    private static sessions;
    private static readonly config;
    /**
     * Generates a unique hexadecimal session ID.
     *
     * @returns A secure 16-character session ID
     */
    static generateId(): string;
    /**
     * Removes expired sessions from memory.
     *
     * Runs internally after each chat operation to ensure cleanup.
     */
    static cleanupSessions(): void;
    /**
     * Sends a chat message to ChatUpAI and receives an AI response.
     *
     * @param input - The user's input message
     * @param sessionId - Optional session ID to maintain context
     * @returns A ChatResponse object containing the AI's reply
     *
     * @example
     * ```ts
     * const reply = await ChatUpAI.chat("What is quantum computing?");
     * console.log(reply.result);
     * ```
     */
    static chat(input: string, sessionId?: string): Promise<ChatResponse>;
    /**
     * Generates an image based on a descriptive text prompt.
     *
     * @param prompt - Text prompt describing the image
     * @param n - Number of images to generate (default: 1)
     * @param size - Size of the image (default: '1024x1024')
     * @returns ImageResponse containing image URL and content
     *
     * @example
     * ```ts
     * const result = await ChatUpAI.generateImage("A forest in neon colors");
     * console.log(result.imageUrl);
     * ```
     */
    static generateImage(prompt: string, n?: number, size?: string): Promise<ImageResponse>;
    /**
     * Performs web browsing based on user query.
     *
     * @param input - Query or search term to browse
     * @returns BrowseResponse containing summary, URLs, and suggestions
     *
     * @example
     * ```ts
     * const info = await ChatUpAI.browsing("Who won the 2024 election?");
     * console.log(info.description);
     * ```
     */
    static browsing(input: string): Promise<BrowseResponse>;
    /**
     * Converts a local PDF file into extracted plain text.
     *
     * @param filePath - Path to a PDF file
     * @returns PdfTextResponse containing the extracted text or error message
     *
     * @example
     * ```ts
     * const text = await ChatUpAI.pdf2Text("./document.pdf");
     * console.log(text.data);
     * ```
     */
    static pdf2Text(filePath: string): Promise<PdfTextResponse>;
}

/**
 * Allowed module operations for GalaxyAI.
 */
type GalaxyModule = 'SUMMARIZE' | 'PARAPHRASE' | 'EXPAND' | 'TONE' | 'TRANSLATE' | 'REPLY' | 'GRAMMAR';
/**
 * Allowed tones when using TONE module.
 */
type ToneType = 'Friendly' | 'Romantic' | 'Sarcastic' | 'Humour' | 'Social' | 'Angry' | 'Sad' | 'Other';
/**
 * Reply types for REPLY module.
 */
type ReplyLength = 'Short' | 'Medium' | 'Long';
/**
 * The payload sent to GalaxyAI API.
 */
interface GalaxyRequestPayload {
    k: string;
    module: GalaxyModule;
    text: string;
    to: string;
    userId: string;
}
/**
 * The successful result returned by GalaxyAI.
 */
interface GalaxySuccessResult {
    module: GalaxyModule;
    input: string;
    to: string;
    output: string;
}
/**
 * Structured result returned by the GalaxyAI SDK.
 */
interface GalaxyResult {
    success: boolean;
    code: number;
    result: GalaxySuccessResult | {
        error: string;
    };
}
/**
 * GalaxyAI SDK - Text generation and manipulation tool using `translapp.info`.
 *
 * @remarks
 * Supports summarization, paraphrasing, expansion, tone editing, grammar fixing, translation, and reply generation.
 */
declare class GalaxyAI {
    static readonly modules: GalaxyModule[];
    static readonly tones: ToneType[];
    static readonly replies: ReplyLength[];
    private static readonly BASE_URL;
    private static readonly HEADERS;
    /**
     * Request processing using the GalaxyAI API.
     *
     * @param text - Input text for transformation.
     * @param module - One of the supported GalaxyModule operations.
     * @param to - Auxiliary parameter (e.g., tone type or language).
     * @param customTone - Custom tone name if tone is set to 'Other'.
     * @returns Structured result object.
     *
     * @example
     * ```ts
     * const result = await GalaxyAI.request("I need this translated.", "TRANSLATE", "French");
     * if (result.success) console.log(result.result.output);
     * ```
     */
    static request(text: string, module: GalaxyModule, to?: string, customTone?: string): Promise<GalaxyResult>;
    /**
     * Utility to shorten the input string (used for hashing).
     *
     * @param input - Input string
     * @returns 5-character padded or sliced string
     */
    private static _shorten;
    /**
     * Generates SHA-256 hash of the provided string.
     *
     * @param str - Input string to hash
     * @returns SHA-256 hexadecimal hash
     */
    private static _hashString;
}

/**
 * Successful result of a Snappin download request.
 */
interface SnappinSuccess {
    status: true;
    thumb: string | undefined;
    video: string | null;
    image: string | null;
}
/**
 * Error result returned when Snappin download fails.
 */
interface SnappinFailure {
    status: false;
    message: string;
}
/**
 * Union type representing either a success or failure.
 */
type SnappinResponse = SnappinSuccess | SnappinFailure;
/**
 * Downloader class for fetching Pinterest media using Snappin.app.
 *
 * @example
 * ```ts
 * const downloader = new SnappinDownloader();
 * const result = await downloader.download('https://pin.it/abc123');
 * if (result.status) {
 *   console.log(result.video);
 * }
 * ```
 */
declare class SnappinDownloader {
    private readonly baseUrl;
    /**
     * Fetches downloadable video/image content from a public Pinterest URL.
     *
     * @param pinterestUrl - Public Pinterest post URL
     * @returns Media result or error message
     */
    download(pinterestUrl: string): Promise<SnappinResponse>;
    /**
     * Internal method to extract CSRF token and cookies from Snappin homepage.
     *
     * @returns Object containing CSRF token and cookie header
     */
    private getCsrfAndCookies;
}

export { AIFreeboxImage, type AIFreeboxImageParams, type Anime, type AnimeData, AnimeFinder, type AnimeFinderError, type AnimeFinderResponse, type AnimeFinderResult, type AnimeReference, Animob, type ApplyFilterInput, type ApplyFilterOutput, BlackboxChat, type BlackboxPayload, type BrowseResponse, type ChaiChatApiResponse, type ChaiChatChoice, type ChaiChatErrorResponse, type ChaiChatMessage, type ChaiChatSuccessResponse, type ChannelFormatted, type ChannelInfo, ChatGPTOnline, type ChatMessage, type ChatPayload, type ChatResponse, ChatUpAI, type DeepfakeInput, DeepseekR1, type DownloadLink, type EnhanceImageOptions, type Episode, type FantaxyCompletedResponse, type FantaxyOutput, FeloSearch, type FilterConfig, type FlagQuestion, GPTImageCanvas, GalaxyAI, type GalaxyModule, type GalaxyRequestPayload, type GalaxyResult, type GalaxySuccessResult, GeminiCanvas, GeminiChat, type GeneratePoemOptions, type GenreData, type GenreList, type GhibliGenerationOptions, type GhibliStyle, type GradioChatOutput, type GradioStreamMessage, GuessTheFlag, type HumanizeFailure, type HumanizeResult, type HumanizeSuccess, type ImageResponse, type ImageResult, type ImageToPromptOptions, type InstagramMedia, type InternalChaiChatRequest, type LogoFileData, type LogoRequestOptions, type LyricsResult, MagicStudioArt, type McpedlCategory, type McpedlEntry, McpedlSearch, type MediaFormat, type MediaTrack, type Message, type Metadata, MikaChat, MikaFilterImage, type MinecraftProfile, MinecraftStalk, type MinecraftStalkResult, MobileLegendsNewsInfo, type MobileLegendsNewsItem, Nakanime, type NameHistoryEntry, type NeuralFramesResponse, type PdfTextResponse, type PoemError, PoemGenerator, type PoemResponse, type PoemSuccess, type ProcessResponse, type ReplyLength, type RetryOptions, type RewriteLevel, type RewriteSettings, type ScrapeResult, ScreenshostWebsite, type ScreenshotRequest, type ScreenshotResponse, type ScreenshotResponseError, type ScreenshotResponseSuccess, SearchLyrics, type SearchResult, type Session, type SnackVideoFailure, type SnackVideoResult, type SnackVideoSuccess, SnappinDownloader, type SnappinFailure, type SnappinResponse, type SnappinSuccess, type StickerPack, type StreamResponse, type StreamServer, type SubscriberStats, type SupportedAspectRatios, type SupportedSlugs, TempMail, type TempMailCreateData, type TempMailCreateResult, type TempMailMessage, type TempMailResponse, type Text2NSFWOptions, TextCraftClient, type TextCraftClientOptions, type TextCraftInput, TextCraftInputSchema, TextToGhibli, type TikTokResult, type TikTokStats, TiktokEarnings, type TokopediaProduct, TokopediaSearch, type ToneType, TranslateImageClient, type UploadCredentials, type UploadResponse, type VideoResult, VocalRemover, type WebSocketMessage, YTDL2, type YTDL2Response, type YoutubeTrackResult, YoutubeTracker, categoryMap, deepfakeTransform, downloadSnackVideo, downloadTikTok, enhanceImage, generateLogo, getStickersFromPack, humanizeText, imageToPrompt, instagram, nsfwModels, nsfwRatios, nsfwStyles, poemLanguages, poemLengths, poemTypes, searchSticker, text2nsfw, uploadToCatbox, ytdl };
