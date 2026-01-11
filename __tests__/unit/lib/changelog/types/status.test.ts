import {
	DefaultStatus,
	ParseStatus,
	parseStatusItem,
} from "@lib/changelog/types/status";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("@lib/utils", () => ({
	getStringValue: vi.fn((value) => value ?? ""),
}));

describe("parseStatusItem", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test("should parse valid status item", () => {
		const mockItem = {
			system: {
				name: "status-id",
				label: "Available",
			},
			identifier: "available",
			description: "Status description",
		};

		const result = parseStatusItem(mockItem as any);

		expect(result.id).toBe("status-id");
		expect(result.name).toBe("Available");
		expect(result.identifier).toBe("available");
		expect(result.description).toBe("Status description");
	});

	test("should throw error for null item", () => {
		expect(() => parseStatusItem(null)).toThrow(
			"Invalid Status: rawItem is null or undefined",
		);
	});

	test("should throw error for undefined item", () => {
		expect(() => parseStatusItem(undefined)).toThrow(
			"Invalid Status: rawItem is null or undefined",
		);
	});

	test("should default description to empty string when missing", () => {
		const mockItem = {
			system: {
				name: "status-id",
				label: "Available",
			},
			identifier: "available",
			description: null,
		};

		const result = parseStatusItem(mockItem as any);

		expect(result.description).toBe("");
	});
});

describe("ParseStatus", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test("should parse multiple status items", () => {
		const mockData = {
			manyStatus: {
				results: [
					{
						system: { name: "status-1", label: "Available" },
						identifier: "available",
						description: "",
					},
					{
						system: { name: "status-2", label: "Coming Soon" },
						identifier: "coming-soon",
						description: "Coming soon description",
					},
				],
			},
		};

		const result = ParseStatus(mockData as any);

		expect(result).toHaveLength(2);
		expect(result[0].identifier).toBe("available");
		expect(result[1].identifier).toBe("coming-soon");
	});

	test("should return empty array for null results", () => {
		const mockData = {
			manyStatus: {
				results: null,
			},
		};

		const result = ParseStatus(mockData as any);

		expect(result).toEqual([]);
	});

	test("should return empty array for missing manyStatus", () => {
		const mockData = {};

		const result = ParseStatus(mockData as any);

		expect(result).toEqual([]);
	});

	test("should return empty array for empty results", () => {
		const mockData = {
			manyStatus: {
				results: [],
			},
		};

		const result = ParseStatus(mockData as any);

		expect(result).toEqual([]);
	});
});

describe("DefaultStatus", () => {
	test("should have correct default status values", () => {
		expect(DefaultStatus.id).toBe("pNOVO2dhtESFOSwd4Va84w");
		expect(DefaultStatus.name).toBe("Available");
		expect(DefaultStatus.identifier).toBe("available");
		expect(DefaultStatus.description).toBe("");
	});
});
