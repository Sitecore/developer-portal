const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = "https://developers.sitecore.com";

const documentation = [
  {
    title: "Sitecore XM Cloud",
    url: "https://doc.sitecore.com/xmc",
  },
  {
    title: "Sitecore Content Hub",
    url: "https://doc.sitecore.com/ch",
  },
  {
    title: "Sitecore Search",
    url: "https://doc.sitecore.com/search",
  },
  {
    title: "Content Hub ONE",
    url: "https://doc.sitecore.com/ch-one",
  },
  {
    title: "Sitecore CDP",
    url: "https://doc.sitecore.com/cdp",
  },
  {
    title: "Sitecore Personalize",
    url: "https://doc.sitecore.com/personalize",
  },
  {
    title: "Sitecore Send",
    url: "https://doc.sitecore.com/send",
  },
  {
    title: "Sitecore Connect",
    url: "https://doc.sitecore.com/connect",
  },
  {
    title: "Sitecore OrderCloud",
    url: "https://doc.sitecore.com/ordercloud",
  },
  {
    title: "Sitecore Discover",
    url: "https://doc.sitecore.com/discover",
  },
  {
    title: "Sitecore Experience Manager",
    url: "https://doc.sitecore.com/xp",
  },
  {
    title: "Sitecore Experience Platform",
    url: "https://doc.sitecore.com/xp",
  },
  {
    title: "Experience Commerce",
    url: "https://doc.sitecore.com/xp",
  },
  {
    title: "Managed Cloud",
    url: "https://doc.sitecore.com/xp",
  },
];

function getAllRoutes(manifest, parentPath = "", rootPath = "") {
  const routes = [];

  if (manifest.routes) {
    manifest.routes.forEach((route) => {
      // Calculate currentPath outside the if block so it's available for children
      const currentPath = path.join(parentPath, route.path).replace(/\\/g, "/");

      if (!route.ignoreLink) {
        const fullPath = rootPath
          ? path.join(rootPath, currentPath).replace(/\\/g, "/")
          : currentPath;

        routes.push({
          title: route.title,
          path: fullPath || "/",
        });
      }

      if (route.children) {
        const childRoutes = getAllRoutes(
          { routes: route.children },
          currentPath,
          rootPath,
        );
        routes.push(...childRoutes);
      }
    });
  }

  return routes;
}

function generateRouteList(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const rootPath = manifest.path || "";
  const routes = getAllRoutes(manifest, "", rootPath);

  // Start with title and description
  let output = `## ${manifest.title}\n`;
  if (manifest.description) {
    output += `${manifest.description}\n\n`;
  }

  if (manifest.title.includes("Accelerate")) {
    output += "## Best Practice articles\n\n";
  }

  // Add the route links with base URL
  const markdownLinks = routes
    .map((route) => `- [${route.title}](${BASE_URL}${route.path})`)
    .join("\n");
  output += markdownLinks;

  return output;
}

function getDocumentationLinks() {
  let output = "\n## Documentation\n\n";

  // Use the documentation array directly
  documentation.forEach((item) => {
    output += `- [${item.title}](${item.url})\n`;
  });

  return output;
}

function main() {
  const pagesDir = path.join(process.cwd(), "data", "markdown", "pages");
  const publicDir = path.join(process.cwd(), "public");

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Find all manifest.json files
  function findManifests(dir) {
    const files = fs.readdirSync(dir);
    const manifests = [];

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        manifests.push(...findManifests(fullPath));
      } else if (file === "manifest.json") {
        manifests.push(fullPath);
      }
    });

    return manifests;
  }

  const manifestFiles = findManifests(pagesDir);
  let combinedOutput = "# Sitecore\n\n";

  manifestFiles.forEach((manifestPath) => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

    // Skip if GenerateLLM is not true
    if (!manifest.generateLLM) {
      //console.log(`Skipping ${manifestPath} - GenerateLLM is not true`);
      return;
    }
    console.log(`✓ Generating LLM for ${manifest.title}`);

    const routeList = generateRouteList(manifestPath);
    combinedOutput += `${routeList}\n\n`;
  });

  // Add documentation links
  combinedOutput += getDocumentationLinks();

  // Write the combined output to a single file
  const outputPath = path.join(publicDir, "llms.txt");
  fs.writeFileSync(outputPath, combinedOutput);
  console.log("✓ Generated llms.txt");
}

main();
