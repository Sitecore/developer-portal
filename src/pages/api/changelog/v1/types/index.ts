// Interfaces
import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type { ChangeType } from "@src/lib/changelog/types";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Array<ChangeType>>,
) => {
	const isPreview = !!req.preview;
	const changelog = new Changelog(getChangelogCredentials(), isPreview);

	await changelog.getChangeTypes().then((response: Array<ChangeType>) => {
		res.setHeader("Cache-Control", "stale-while-revalidate");
		res.status(200).json(response);
	});
};

export default handler;
