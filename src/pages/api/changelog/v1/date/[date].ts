// Interfaces

import { Changelog } from "@src/lib/changelog";
import { getChangelogCredentials } from "@src/lib/changelog/common/credentials";
import type {
  ChangelogEntry,
  ChangelogEntryList,
} from "@src/lib/changelog/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { getQueryArray, getQueryValue } from "@/src/lib/util/requests";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ChangelogEntryList<Array<ChangelogEntry>>>,
) => {
  const isPreview = !!req.preview;
  const date: Array<string> = getQueryArray(req.query.date);
  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  const dateString = date[0];
  let isoString = `${dateString}T00:00:00.000Z`;

  if (!dateString.includes("-")) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    isoString = `${year}-${month}-${day}T00:00:00.000Z`;
  }

  const dateObject = new Date(isoString);

  await changelog
    .getEntriesByDate(dateObject, Number(limit), end)
    .then((response) => {
      res.status(200).json(response);
    });
};

export default handler;
