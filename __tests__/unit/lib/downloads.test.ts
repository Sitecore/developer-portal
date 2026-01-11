import downloads, { PUBLIC_DOWNLOAD_HOST } from "@data/data-downloads";
import { getDownloadItemByUid, getDownloadUrl } from "@src/lib/downloads";
import { describe, expect, it } from "vitest";

describe("getDownloadItemByUid", () => {
	it("should return undefined if uid is null", () => {
		const result = getDownloadItemByUid(null);
		expect(result).toBeUndefined();
	});

	it("should return the correct DownloadItem if uid is valid", () => {
		const uid = downloads[0].uid;
		const result = getDownloadItemByUid(uid);
		expect(result).toEqual(downloads[0]);
	});

	it("should return undefined if uid is not found", () => {
		const result = getDownloadItemByUid("nonexistent");
		expect(result).toBeUndefined();
	});
});

describe("getDownloadUrl", () => {
	it("should return undefined if uid is null", () => {
		const result = getDownloadUrl(null);
		expect(result).toBeUndefined();
	});

	it("should return the correct download URL if uid is valid", () => {
		const uid = downloads[0].uid;
		const expectedUrl = PUBLIC_DOWNLOAD_HOST.concat(downloads[0].fileLocation);
		const result = getDownloadUrl(uid);
		expect(result).toBe(expectedUrl);
	});

	it("should return undefined if uid is not found", () => {
		const result = getDownloadUrl("nonexistent");
		expect(result).toBeUndefined();
	});
});
