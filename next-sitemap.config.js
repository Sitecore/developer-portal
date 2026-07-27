const isProduction = process.env.VERCEL_ENV === "production";

// ---------------------------------------------------------------------
// Full AEO-optimized policy set — applied in PRODUCTION only.
// Allows reputable search, retrieval, and training crawlers so the docs
// are both citable in AI answers and learnable by the models.
// ---------------------------------------------------------------------
const productionPolicies = [
  // --- Traditional search engines ---
  { userAgent: "Googlebot", allow: "/" },
  { userAgent: "Googlebot-Image", allow: "/" },
  { userAgent: "Bingbot", allow: "/" },
  { userAgent: "DuckDuckBot", allow: "/" },
  { userAgent: "Yandex", allow: "/" },

  // --- AI search / retrieval bots (earn citations in AI answers) ---
  { userAgent: "OAI-SearchBot", allow: "/" },
  { userAgent: "ChatGPT-User", allow: "/" },
  { userAgent: "Claude-SearchBot", allow: "/" },
  { userAgent: "Claude-User", allow: "/" },
  { userAgent: "PerplexityBot", allow: "/" },
  { userAgent: "Perplexity-User", allow: "/" },
  { userAgent: "Applebot", allow: "/" },

  // --- AI training bots (feed model knowledge of the platform) ---
  { userAgent: "GPTBot", allow: "/" },
  { userAgent: "ClaudeBot", allow: "/" },
  { userAgent: "anthropic-ai", allow: "/" },
  { userAgent: "claude-web", allow: "/" },
  { userAgent: "Google-Extended", allow: "/" },
  { userAgent: "Applebot-Extended", allow: "/" },
  { userAgent: "CCBot", allow: "/" },
  { userAgent: "Meta-ExternalAgent", allow: "/" },
  { userAgent: "Amazonbot", allow: "/" },
  { userAgent: "cohere-ai", allow: "/" },

  // --- Aggressive / low-value crawler — block to protect load ---
  { userAgent: "Bytespider", disallow: "/" },

  // --- Default: allow everything else ---
  { userAgent: "*", allow: "/" },
];

// ---------------------------------------------------------------------
// Preview / non-production — lock everything down so staging
// deployments are never crawled or indexed.
// ---------------------------------------------------------------------
const previewPolicies = [{ userAgent: "*", disallow: "/" }];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://developers.sitecore.com",
  changefreq: "daily",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: isProduction === false ? ["/"] : [],
  robotsTxtOptions: {
    // The `Sitemap:` line is emitted automatically from `siteUrl`.
    policies: isProduction ? productionPolicies : previewPolicies,
  },
};