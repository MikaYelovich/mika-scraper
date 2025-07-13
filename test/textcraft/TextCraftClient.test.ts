import { describe, expect, test, vi, beforeEach } from 'vitest';
import axios from 'axios';
import {
  TextCraftClient,
  InvalidTextCraftResponseError,
} from '../../src/textcraft/TextCraftClient.js';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> };

const mockXML = (filename = 'test.png', datadir = 'dir123') => `
<image>
  <fullfilename>${filename}</fullfilename>
  <datadir>${datadir}</datadir>
</image>
`;

describe('TextCraftClient', () => {
  let client: TextCraftClient;

  beforeEach(() => {
    client = new TextCraftClient();
    vi.clearAllMocks();
  });

  test('should generate valid image URL from mocked response', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: mockXML('hello.png', 'images123'),
    });

    const url = await client.generateImage({
      text: 'IWAK LELE',

      text2: 'WOKK',
      text3: 'KING',
    });

    expect(url).toBe('https://static1.textcraft.net/images123/hello.png');
  });

  test('should throw validation error on empty text', async () => {
    await expect(client.generateImage({ text: '' })).rejects.toThrow(
      'Main text is required'
    );
  });

  test('should throw InvalidTextCraftResponseError if XML is missing fields', async () => {
    mockedAxios.get = vi.fn().mockResolvedValue({
      data: `<image></image>`,
    });

    await expect(client.generateImage({ text: 'Test' })).rejects.toThrow(
      InvalidTextCraftResponseError
    );
  });

  test('should handle Axios network errors gracefully', async () => {
    mockedAxios.get = vi.fn().mockRejectedValue({
      isAxiosError: true,
      message: 'Network down',
    });

    await expect(client.generateImage({ text: 'Test' })).rejects.toThrow(
      'Network error: Network down'
    );
  });
});
