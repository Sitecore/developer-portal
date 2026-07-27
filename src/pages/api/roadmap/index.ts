import { authOptions } from "@src/lib/auth/options";
import type { RoadmapInformation } from "@src/lib/interfaces/jira";
import { getRoadmap } from "@src/lib/jira";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getQueryArray } from "@/src/lib/util/requests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RoadmapInformation | { error: string }>,
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.orgId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const products: Array<string> = getQueryArray(req.query.product);

  try {
    const response = await getRoadmap();

    if (response == null) {
      return res
        .status(500)
        .json({ error: "Failed to fetch data from external API" });
    }

    if (products.length > 0) {
      response.items = response.items.filter((item) => {
        return item.product.some((product) => products.includes(product.id));
      });
    }
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Failed to fetch roadmap data" });
  }
}
