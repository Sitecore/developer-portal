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
  const products: Array<string> = getQueryArray(req.query.product);
  const changeTypes: Array<string> = getQueryArray(req.query.changeType);
  const breaking = req.query.breaking ? true : undefined;
  const isPreview = !!req.preview;

  const limit = getQueryArray(req.query.limit);
  const end = getQueryValue(req.query.end);

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog
    .getEntries({
      productId: products.join("|"),
      changeTypeId: changeTypes.join("|"),
      pageSize: Number(limit),
      endCursor: end,
      breaking: breaking,
    })
    .then((response) => {
      res.status(200).json(response);
    });
};

export default handler;
