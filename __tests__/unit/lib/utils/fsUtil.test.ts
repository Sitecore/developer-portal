import path from "node:path";
import { searchForFile } from "@lib/utils/fsUtils";
import { vol } from "memfs";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("fs");

beforeEach(() => {
	vol.reset();
	vol.fromJSON({
		"/products/xm-cloud/index.md": "Hello world 1",
		"/products/manifest.json": "Hello world 1",
	});
});

// Test for searchForFile function
describe("searchForFile Tests", () => {
	test("should read a file", async () => {
		const filePath = searchForFile(
			"\\products\\xm-cloud\\index.md",
			"manifest.json",
		);
		expect(filePath).toBe(path.join("\\products\\manifest.json"));
	});

	test("searchForFile should return null if file not found", () => {
		const folderPath =
			"/c:/Projects/developer-portal/apps/devportal/src/lib/utils";
		const fileName = "nonexistent.txt";
		const filePath = searchForFile(folderPath, fileName);
		expect(filePath).toBeNull();
	});
});
