// Interfaces
import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type { Product } from "@src/lib/changelog/types";
import { getQueryValue } from "@src/lib/utils/requests";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Array<Product>>,
) => {
	const showAll: boolean = getQueryValue(req.query.all) !== "false";
	const isPreview = !!req.preview;

	res.setHeader("Cache-Control", "stale-while-revalidate");

	const changelog = new Changelog(getChangelogCredentials(), isPreview);

	await changelog.getProducts().then((response: Array<Product>) => {
		if (showAll) {
			res.status(200).json(response);
		} else {
			res.status(200).json(response.filter((e) => e.hasEntries));
		}
	});
};

export default handler;
