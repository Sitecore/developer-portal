import type { Option } from "@components/ui/dropdown";
import type { Product } from "@src/lib/changelog/types";

export const mockedProducts: Product[] = [
	{
		id: "4U7YVAy4V0mH0fA7foawJw",
		name: "Search",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-search",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-search-dark",
		hasEntries: true,
	},
	{
		id: "8OiTP5UKXE-RRpU17Vpq4A",
		name: "Content Hub",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark",
		hasEntries: true,
	},
	{
		id: "K1VyMQaExUGe-OD6eoSvdA",
		name: "Content Hub DAM",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_dam",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_dam-dark",
		hasEntries: false,
	},
	{
		id: "KBtlU-ZzYkeYcafWoxyuNQ",
		name: "Connect",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-connect",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-connect-dark",
		hasEntries: true,
	},
	{
		id: "L24AbSEPSUKkDQTpPT7uoA",
		name: "Discover",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-discover",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-discover-dark",
		hasEntries: true,
	},
	{
		id: "S3Nt7UJGiUKRji3ERDpNEA",
		name: "CDP",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-cdp",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-cdp-dark",
		hasEntries: true,
	},
	{
		id: "ZTMYkjzXSkaOwpB95ZujrQ",
		name: "Cloud Portal",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-sitecore-dark",
		hasEntries: true,
	},
	{
		id: "ZagATPres0mB9V0eVoqk2A",
		name: "Content Hub Operations",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_ops",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_ops-dark",
		hasEntries: false,
	},
	{
		id: "av_GqshF5U2kL8XMGjf-Xw",
		name: "XM Cloud",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark",
		hasEntries: true,
	},
	{
		id: "i_EBHSPyF0WvLmpKn99Byw",
		name: "Send",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-send",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-send-dark",
		hasEntries: true,
	},
	{
		id: "n47NXxNFxUqPttUxoFaRyA",
		name: "Content Hub ONE",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_one",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_one-dark",
		hasEntries: true,
	},
	{
		id: "u-geEE0EVkiusuAZ1D0EeQ",
		name: "OrderCloud",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-ordercloud",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-ordercloud-dark",
		hasEntries: true,
	},
	{
		id: "uAwJlln4BUqyOtpExq1O5g",
		name: "Personalize",
		lightIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize",
		darkIcon:
			"https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize-dark",
		hasEntries: true,
	},
	{
		id: "QE7yZxFxSIGAWptcuNG7gA",
		name: "SitecoreAI",
		lightIcon:
			"https://sitecore.sitecorecontenthub.cloud/api/gateway/identifier/QE7yZxFxSIGAWptcuNG7gA",
		darkIcon:
			"https://sitecore.sitecorecontenthub.cloud/api/gateway/identifier/QE7yZxFxSIGAWptcuNG7gA",
		hasEntries: true,
	},
];

export function getMockedProductOptions(): Option[] {
	return mockedProducts.map((e: Product) => ({ label: e.name, value: e.id }));
}
