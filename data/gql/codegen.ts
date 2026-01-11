import { resolve } from "node:path";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenvConfig } from "dotenv";

// Load environment variables (try .env.local first, then .env, then system env)
dotenvConfig({ path: resolve(process.cwd(), ".env.local") });
dotenvConfig({ path: resolve(process.cwd(), ".env") });

// Get credentials from environment variables (same as fetch.ts)
const endpoint = process.env.SITECORE_CS_ENDPOINT;
const tenant = process.env.SITECORE_CS_TENANT;
const env = process.env.SITECORE_CS_ENV;
const token = process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW;

// Validate required environment variables
const missingVars: string[] = [];
if (!endpoint) missingVars.push("SITECORE_CS_ENDPOINT");
if (!tenant) missingVars.push("SITECORE_CS_TENANT");
if (!env) missingVars.push("SITECORE_CS_ENV");
if (!token) missingVars.push("SITECORE_CS_AUTH_TOKEN_PREVIEW");

if (missingVars.length > 0) {
  console.error("\n❌ Missing required environment variables:");
  for (const varName of missingVars) {
    console.error(`   - ${varName}`);
  }
  console.error("\n💡 Please ensure these variables are set in:");
  console.error("   - .env.local (recommended for local development)");
  console.error("   - .env");
  console.error("   - System environment variables\n");
  process.exit(1);
}

// Build preview endpoint URL (same as credentials.ts)
const previewEndpoint = `${endpoint}/${tenant}/${env}?preview=true`;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [previewEndpoint]: {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    },
  ],
  documents: ["./data/gql/query/**/*.graphql"],
  ignoreNoDocuments: false,
  generates: {
    // Generate schema file from the fetched schema
    "./data/gql/schema/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
    // Generate TypeScript types and client code
    "./data/gql/generated/": {
      preset: "client",
      config: {
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
        documentMode: "string",
        skipTypename: true,
        skipDocumentsValidation: {
          skipValidationAgainstSchema: true,
        },
        scalars: {
          ID: {
            input: "string",
            output: "string",
          },
          CustomDateTime: "Date",
          JSON: "{ [key: string]: any }",
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
