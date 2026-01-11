import { entriesApiUrl, getSelectedIds } from "@lib/changelog/common/changelog";
import { describe, expect, test } from "vitest";

describe("getSelectedIds", () => {
	test("should parse pipe-separated string into array", () => {
		expect(getSelectedIds("id1|id2|id3")).toEqual(["id1", "id2", "id3"]);
	});

	test("should return single item array for single ID", () => {
		expect(getSelectedIds("id1")).toEqual(["id1"]);
	});

	test("should return empty array for empty string", () => {
		expect(getSelectedIds("")).toEqual([]);
	});

	test("should return empty array for undefined", () => {
		expect(getSelectedIds(undefined)).toEqual([]);
	});

	test("should handle IDs with special characters", () => {
		expect(getSelectedIds("id-1|id_2|id.3")).toEqual(["id-1", "id_2", "id.3"]);
	});

	test("should handle whitespace in IDs", () => {
		expect(getSelectedIds("id1 | id2 | id3")).toEqual([
			"id1 ",
			" id2 ",
			" id3",
		]);
	});

	test("should handle multiple pipes", () => {
		expect(getSelectedIds("id1||id2")).toEqual(["id1", "", "id2"]);
	});
});

describe("entriesApiUrl", () => {
	test("should export entriesApiUrl constant", () => {
		expect(entriesApiUrl).toBe("/api/changelog/v1");
	});
});
