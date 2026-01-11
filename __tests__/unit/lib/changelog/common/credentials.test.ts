import { getChangelogCredentials } from "@lib/changelog/common/credentials";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

describe("getChangelogCredentials", () => {
	const originalEnv = process.env;

	beforeEach(() => {
		vi.resetModules();
		process.env = { ...originalEnv };
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	test("should construct credentials from environment variables", () => {
		process.env.SITECORE_CS_ENDPOINT = "https://api.example.com";
		process.env.SITECORE_CS_TENANT = "tenant123";
		process.env.SITECORE_CS_ENV = "prod";
		process.env.SITECORE_CS_AUTH_TOKEN_DELIVERY = "delivery-token";
		process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW = "preview-token";

		const credentials = getChangelogCredentials();

		expect(credentials.production.endpoint).toBe(
			"https://api.example.com/tenant123/prod",
		);
		expect(credentials.production.token).toBe("delivery-token");
		expect(credentials.preview.endpoint).toBe(
			"https://api.example.com/tenant123/prod?preview=true",
		);
		expect(credentials.preview.token).toBe("preview-token");
	});

	test("should handle different endpoint formats", () => {
		process.env.SITECORE_CS_ENDPOINT = "https://api.sitecore.com";
		process.env.SITECORE_CS_TENANT = "my-tenant";
		process.env.SITECORE_CS_ENV = "dev";
		process.env.SITECORE_CS_AUTH_TOKEN_DELIVERY = "token1";
		process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW = "token2";

		const credentials = getChangelogCredentials();

		expect(credentials.production.endpoint).toBe(
			"https://api.sitecore.com/my-tenant/dev",
		);
		expect(credentials.preview.endpoint).toBe(
			"https://api.sitecore.com/my-tenant/dev?preview=true",
		);
	});

	test("should construct production endpoint correctly", () => {
		process.env.SITECORE_CS_ENDPOINT = "https://api.example.com";
		process.env.SITECORE_CS_TENANT = "test-tenant";
		process.env.SITECORE_CS_ENV = "staging";
		process.env.SITECORE_CS_AUTH_TOKEN_DELIVERY = "prod-token";
		process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW = "prev-token";

		const credentials = getChangelogCredentials();

		expect(credentials.production.endpoint).toContain(
			"https://api.example.com",
		);
		expect(credentials.production.endpoint).toContain("test-tenant");
		expect(credentials.production.endpoint).toContain("staging");
		expect(credentials.production.token).toBe("prod-token");
	});

	test("should construct preview endpoint with preview query parameter", () => {
		process.env.SITECORE_CS_ENDPOINT = "https://api.example.com";
		process.env.SITECORE_CS_TENANT = "test-tenant";
		process.env.SITECORE_CS_ENV = "staging";
		process.env.SITECORE_CS_AUTH_TOKEN_DELIVERY = "prod-token";
		process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW = "prev-token";

		const credentials = getChangelogCredentials();

		expect(credentials.preview.endpoint).toContain("preview=true");
		expect(credentials.preview.token).toBe("prev-token");
	});
});
