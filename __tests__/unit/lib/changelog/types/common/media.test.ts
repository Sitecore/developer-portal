import {
    parseMediaItem,
    parseMediaItems,
} from "@src/lib/changelog/types/common/media";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("@src/lib/utils", () => ({
	getStringValue: vi.fn((value) => value ?? ""),
}));

describe("parseMediaItem", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test("should parse valid media item", () => {
		const mockItem = {
			system: {
				id: "media-123",
				name: "image.png",
			},
			media_publicLink: "https://example.com/image.png",
			media_type: [
				{
					name: "image/png",
				},
			],
		};

		const result = parseMediaItem(mockItem as any);

		expect(result.id).toBe("media-123");
		expect(result.name).toBe("image.png");
		expect(result.fileName).toBe("image.png");
		expect(result.fileUrl).toBe("https://example.com/image.png");
		expect(result.fileType).toBe("image/png");
		expect(result.fileId).toBe("media-123");
		expect(result.description).toBe("");
		expect(result.fileWidth).toBe(0);
		expect(result.fileHeight).toBe(0);
		expect(result.fileSize).toBe("");
	});

	test("should throw error for null item", () => {
		expect(() => parseMediaItem(null)).toThrow(
			"Invalid Media: rawItem is null or undefined",
		);
	});

	test("should throw error for undefined item", () => {
		expect(() => parseMediaItem(undefined)).toThrow(
			"Invalid Media: rawItem is null or undefined",
		);
	});

	test("should handle missing optional fields", () => {
		const mockItem = {
			system: {
				id: "media-123",
				name: "image.png",
			},
			media_publicLink: null,
			media_type: null,
		};

		const result = parseMediaItem(mockItem as any);

		expect(result.fileUrl).toBe("");
		expect(result.fileType).toBe("");
	});

	test("should handle empty media_type array", () => {
		const mockItem = {
			system: {
				id: "media-123",
				name: "image.png",
			},
			media_publicLink: "https://example.com/image.png",
			media_type: [],
		};

		const result = parseMediaItem(mockItem as any);

		expect(result.fileType).toBe("");
	});
});

describe("parseMediaItems", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test("should parse array of media items", () => {
		const mockItems = [
			{
				system: { id: "media-1", name: "image1.png" },
				media_publicLink: "https://example.com/image1.png",
				media_type: [{ name: "image/png" }],
			},
			{
				system: { id: "media-2", name: "image2.png" },
				media_publicLink: "https://example.com/image2.png",
				media_type: [{ name: "image/jpeg" }],
			},
		];

		const result = parseMediaItems(mockItems as any);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe("media-1");
		expect(result[1].id).toBe("media-2");
	});

	test("should return empty array for null", () => {
		const result = parseMediaItems(null);

		expect(result).toEqual([]);
	});

	test("should return empty array for undefined", () => {
		const result = parseMediaItems(undefined);

		expect(result).toEqual([]);
	});

	test("should filter out null items", () => {
		const mockItems = [
			{
				system: { id: "media-1", name: "image1.png" },
				media_publicLink: "https://example.com/image1.png",
				media_type: [{ name: "image/png" }],
			},
			null,
			{
				system: { id: "media-2", name: "image2.png" },
				media_publicLink: "https://example.com/image2.png",
				media_type: [{ name: "image/jpeg" }],
			},
		];

		const result = parseMediaItems(mockItems as any);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe("media-1");
		expect(result[1].id).toBe("media-2");
	});

	test("should return empty array for empty array", () => {
		const result = parseMediaItems([]);

		expect(result).toEqual([]);
	});
});
