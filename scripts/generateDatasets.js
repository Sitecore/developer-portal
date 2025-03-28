/**
 * Script to generate markdown datasets from markdown files in the pages directory.
 * This script processes markdown files and their associated manifest files to create
 * combined markdown datasets for LLM training.
 *
 * Usage:
 *   node scripts/generate-datasets.js [baseUrl]
 *
 * Parameters:
 *   baseUrl (optional): The base URL to use for generating absolute URLs in the markdown content.
 *                      If not provided, defaults to 'https://developers.sitecore.com'
 *
 * The script will:
 * 1. Look for manifest.json files in the data/markdown/pages directory and its subdirectories
 * 2. Process only manifests where generateLLM is set to true
 * 3. Find all markdown files in the manifest's directory and subdirectories
 * 4. Convert HTML content to markdown format
 * 5. Combine all content into a single markdown file
 * 6. Save the output to public/dataset-{sectionName}.md
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Get BASE_URL from command line arguments or use default
const args = process.argv.slice(2);
const BASE_URL = args[0] || 'https://developers.sitecore.com';

function removeRowElements(content) {
  return content.replace(/<Row[^>]*>([\s\S]*?)<\/Row>/g, (match, content) => {
    // Convert content to list items, preserving any existing list items
    return (
      content
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map((line) => (line.startsWith('-') ? line : `- ${line}`))
        .join('\n') + '\n'
    );
  });
}

function convertLinkElements(content) {
  return content.replace(/<Link[^>]*title="([^"]*)"[^>]*link="([^"]*)"[^>]*\/>/g, (match, title, link) => {
    // Prefix links that start with /learn/accelerate with BASE_URL
    const finalLink = link.startsWith('/learn/accelerate') ? `${BASE_URL}${link}` : link;
    return `[${title}](${finalLink})`;
  });
}

function convertMarkdownLinks(content) {
  return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, title, link) => {
    // Prefix links that start with /learn/accelerate with BASE_URL
    const finalLink = link.startsWith('/learn/accelerate') ? `${BASE_URL}${link}` : link;
    return `[${title}](${finalLink})`;
  });
}

function convertHtmlImagesToMarkdown(content) {
  return (
    content
      // Handle figure tags with img and figcaption
      .replace(/<figure>[\s\S]*?<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>[\s\S]*?<figcaption>([\s\S]*?)<\/figcaption>[\s\S]*?<\/figure>/g, (match, src, alt, caption) => {
        const imageUrl = src.startsWith('/images') ? `${BASE_URL}${src}` : src;
        return `![${alt}](${imageUrl})`;
      })
      // Handle standalone img tags
      .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/g, (match, src, alt) => {
        const imageUrl = src.startsWith('/images') ? `${BASE_URL}${src}` : src;
        return `![${alt}](${imageUrl})`;
      })
  );
}

function convertStrongToBold(content) {
  return content.replace(/<strong>([\s\S]*?)<\/strong>/g, (match, text) => {
    return `**${text}**`;
  });
}

function convertEmToItalic(content) {
  return content.replace(/<em>([\s\S]*?)<\/em>/g, (match, text) => {
    return `*${text}*`;
  });
}

function ensureCodeBlockSpacing(content) {
  return content.replace(/([^\n])\n```/g, '$1\n\n```');
}

function convertUnorderedLists(content) {
  return content.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (match, listContent) => {
    return listContent
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (liMatch, liContent) => {
        return `- ${liContent.trim()}\n`;
      })
      .trim();
  });
}

function convertStandaloneListItems(content) {
  return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (match, liContent) => {
    // Clean the content while preserving markdown formatting
    const cleanContent = cleanMarkdownContent(liContent);
    return `- ${cleanContent.trim()}\n`;
  });
}

function convertImageComponents(content) {
  return content.replace(/<Image[^>]*src="([^"]*)"[^>]*title="([^"]*)"[^>]*\/>/g, (match, src, title) => {
    const imageUrl = src.startsWith('/images') ? `${BASE_URL}${src}` : src;
    return `![${title}](${imageUrl})`;
  });
}

function cleanMarkdownContent(content) {
  // First remove Row elements
  content = removeRowElements(content);

  // Then convert Link elements
  content = convertLinkElements(content);

  // Then convert existing markdown links
  content = convertMarkdownLinks(content);

  // Then convert Image components
  content = convertImageComponents(content);

  // Then convert images
  content = convertHtmlImagesToMarkdown(content);

  // Convert strong tags to bold
  content = convertStrongToBold(content);

  // Convert em tags to italic
  content = convertEmToItalic(content);

  // Ensure code blocks have blank lines before them
  content = ensureCodeBlockSpacing(content);

  // Convert unordered lists to markdown
  content = convertUnorderedLists(content);

  // Convert standalone list items
  content = convertStandaloneListItems(content);

  // Replace HTML lists with markdown lists
  content = content
    // Replace ordered lists
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (match, listContent) => {
      return listContent
        .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (liMatch, liContent) => {
          return `1. ${liContent.trim()}\n`;
        })
        .trim();
    })
    // Remove strong tags from headings
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g, (match, level, content) => {
      const cleanContent = content.replace(/<strong>([\s\S]*?)<\/strong>/g, '$1');
      return `\n${'#'.repeat(level)} ${cleanContent}\n`;
    });

  return content;
}

function getAllMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  let markdownFiles = [];

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      markdownFiles = markdownFiles.concat(getAllMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      markdownFiles.push(fullPath);
    }
  });

  return markdownFiles;
}

function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdownContent } = matter(content);

  let output = '';

  // Add title as heading if it exists
  if (data.title) {
    output += `# ${data.title}\n\n`;
  }

  // Add description if it exists
  if (data.description) {
    output += `${data.description}\n\n`;
  }

  // Clean and add the markdown content without frontmatter
  const cleanContent = cleanMarkdownContent(markdownContent);
  output += cleanContent;

  return output;
}

function main() {
  const pagesDir = path.join(process.cwd(), 'data', 'markdown', 'pages');
  const publicDir = path.join(process.cwd(), 'public');

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
      } else if (file === 'manifest.json') {
        manifests.push(fullPath);
      }
    });

    return manifests;
  }

  const manifestFiles = findManifests(pagesDir);

  manifestFiles.forEach((manifestPath) => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    // Skip if GenerateLLM is not true
    if (!manifest.generateLLM) {
      return;
    }

    // Get the parent folder name for the manifest
    const parentDir = path.dirname(manifestPath);
    const sectionName = path.basename(parentDir);

    // Get all markdown files in the manifest's directory and subdirectories
    const markdownFiles = getAllMarkdownFiles(parentDir);

    if (markdownFiles.length === 0) {
      console.log(`No markdown files found for ${sectionName}`);
      return;
    }

    // Process each markdown file and combine them
    let combinedContent = `# ${manifest.title}\n\n`;
    if (manifest.description) {
      combinedContent += `${manifest.description}\n\n`;
    }
    combinedContent += '## Articles\n\n';

    markdownFiles.forEach((file) => {
      const content = processMarkdownFile(file);
      combinedContent += content + '\n\n';
    });

    // Write the combined content to a file
    const outputPath = path.join(publicDir, `dataset-${sectionName}.md`);
    fs.writeFileSync(outputPath, combinedContent);
    console.log(`✓ Generated dataset for ${sectionName}`);
  });
}

main();
