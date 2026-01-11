import { Product } from "@/src/lib/assets";

export interface ProductInfoType {
	type: Product;
	name: string;
	subTitle: string;
	description: string;
	linkHref: string;
	linkText: string;
}

export const SitecoreAI: ProductInfoType = {
	type: Product.SitecoreAI,
	name: "SitecoreAI",
	subTitle: "SitecoreAI",
	description: "The next evolution of the Sitecore platform.",
	linkHref: "/products/SitecoreAI",
	linkText: "SitecoreAI",
};

export const ContentHubONE: ProductInfoType = {
	type: Product.ContentHubOne,
	name: "Content Hub ONE",
	subTitle: "Agile CMS",
	description:
		"Headless CMS for the simplified creation and management of experiences across channels and devices.",
	linkHref: "/products/content-hub-one",
	linkText: "Content Hub ONE",
};
export const CDP: ProductInfoType = {
	type: Product.CDP,
	name: "CDP",
	subTitle: "Customer Data Platform",
	description:
		"Collect, unify, and unlock the power of customer data to drive personalization and decision-making.",
	linkHref: "/products/customer-data-platform",
	linkText: "CDP",
};
export const Discover: ProductInfoType = {
	type: Product.Discover,
	name: "Discover",
	subTitle: "Product Discovery",
	description:
		"Amplify customer conversions with hyper-relevant search results and AI-driven, automated merchandising.",
	linkHref: "/products/discover",
	linkText: "Discover",
};

export const Connect: ProductInfoType = {
	type: Product.Connect,
	name: "Connect",
	subTitle: "Automation",
	description: "Integrate seamlessly with third-party apps and connectors.",
	linkHref: "/products/connect",
	linkText: "Connect",
};
export const Send: ProductInfoType = {
	type: Product.Send,
	name: "Send",
	subTitle: "Marketing Automation",
	description:
		"Automate personalized email engagements that build trust and foster long-term relationships.",
	linkHref: "/products/send",
	linkText: "Send",
};
export const XMCloud: ProductInfoType = {
	type: Product.XMCloud,
	name: "XM Cloud",
	subTitle: "Content Management",
	description:
		"Build exceptional websites with world-leading content management and easy personalization.",
	linkHref: "/products/xm-cloud",
	linkText: "XM Cloud",
};
export const Personalize: ProductInfoType = {
	type: Product.Personalize,
	name: "Personalize",
	subTitle: "Personalization and Testing",
	description:
		"Introduce a test and learn approach with personalization that connects customer experience across every channel.",
	linkHref: "/products/personalize",
	linkText: "Personalize",
};
export const OrderCloud: ProductInfoType = {
	type: Product.OrderCloud,
	name: "OrderCloud",
	subTitle: "Commerce Platform",
	description:
		"Extend your digital sales to any touchpoint, in any environment, for any customer.",
	linkHref: "/products/ordercloud",
	linkText: "OrderCloud",
};
export const Search: ProductInfoType = {
	type: Product.Search,
	name: "Search",
	subTitle: "Intelligent search",
	description:
		"Delight your visitors with AI-assisted search that serves the right content, quickly.",
	linkHref: "/content-management/search",
	linkText: "Search",
};
export const ContentHub: ProductInfoType = {
	type: Product.ContentHub,
	name: "Content Hub",
	subTitle: "Content Hub",
	description:
		"Master digital asset management and content operations—all in one.",
	linkHref: "/products/content-hub",
	linkText: "Content Hub",
};
export const XP: ProductInfoType = {
	type: Product.ExperiencePlatform,
	name: "Experience Platform",
	subTitle: "Your all-in-one DXP",
	description:
		"Meet the all-in-one platform that consolidates content management, personalization, and analytics.",
	linkHref: "/products/experience-platform",
	linkText: "Experience Platform (XP)",
};
