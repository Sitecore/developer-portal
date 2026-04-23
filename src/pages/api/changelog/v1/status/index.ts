// Interfaces
import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type { Status } from "@src/lib/changelog/types";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<Status>>,
) => {
  const isPreview = !!req.preview;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getStatus().then((response: Array<Status>) => {
    res.setHeader("Cache-Control", "stale-while-revalida1te");
    res.status(200).json(response);
  });
};

export default handler;
