import {
  type AzureStorageConfig,
  getAzureStorageConfig,
  validateAndGenerateSasUrl,
} from "@src/lib/downloads/azure";
import type { NextApiRequest, NextApiResponse } from "next";
import { getQueryValue } from "@/src/lib/util/requests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Validate method is GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate file parameter is provided
  if (!req.query.file) {
    return res.status(400).json({ error: "File parameter is required" });
  }

  try {
    const fileName: string = getQueryValue(req.query.file);
    if (!fileName) {
      return res.status(400).json({ error: "File parameter is required" });
    }

    // Validate file is a Sitecore Stream or SitecoreAI Pathway file
    if (
      !fileName.includes("Sitecore_Stream") &&
      !fileName.includes("SitecoreAI")
    ) {
      return res
        .status(400)
        .json({ error: "File is not a Sitecore Stream or SitecoreAI file" });
    }

    // Create Azure storage configuration
    const config: AzureStorageConfig = getAzureStorageConfig();
    const sasUrl = await validateAndGenerateSasUrl(config, fileName, 15);

    // 🔁 Redirect to the signed URL
    res.setHeader("Location", sasUrl);
    res.statusCode = 302;
    res.end();
  } catch (err) {
    console.error("Error generating SAS token:", err);

    // Handle specific error types
    if (err instanceof Error) {
      if (err.message.includes("Blob does not exist")) {
        return res.status(404).json({ error: "File not found" });
      }
      if (err.message.includes("Generated SAS URL is invalid")) {
        return res
          .status(500)
          .json({ error: "Failed to generate valid download token" });
      }
    }

    return res.status(500).json({ error: "Failed to generate download token" });
  }
}
