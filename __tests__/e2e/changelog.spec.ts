import { expect, test } from "@playwright/test";

test.describe("Changelog tests", () => {
	test("Load changelog homepage", async ({ page }) => {
		await page.goto("/changelog");
		const pageTitle = await page.title();
		expect(pageTitle).toBe("Changelog | Sitecore Developer Portal");
	});

	test("Load product selector", async ({ page }) => {
		await page.goto("/changelog");
		await page.locator("#productSelector div").nth(4).click();
		await expect(page.getByRole("option", { name: "Search" })).toBeVisible();
		await expect(
			page.getByRole("option", { name: "Content Hub", exact: true }),
		).toBeVisible();
		await expect(page.getByRole("option", { name: "Discover" })).toBeVisible();
		await expect(page.getByRole("option", { name: "Connect" })).toBeVisible();
		await expect(page.getByRole("option", { name: "CDP" })).toBeVisible();
		await expect(
			page.getByRole("option", { name: "Cloud Portal" }),
		).toBeVisible();
		await expect(page.getByRole("option", { name: "XM Cloud" })).toBeVisible();
		await expect(page.getByRole("option", { name: "Send" })).toBeVisible();
	});

	test("Load changetype selector", async ({ page }) => {
		await page.goto("/changelog");
		await page.locator("#changeSelector div").nth(4).click();
		await expect(
			page.getByRole("option", { name: "Improvement" }),
		).toBeVisible();
		await expect(
			page.getByRole("option", { name: "New feature" }),
		).toBeVisible();
		await expect(page.getByRole("option", { name: "Resolved" })).toBeVisible();
	});
});
