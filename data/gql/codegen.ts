import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      './data/gql/schema/schema.graphql': {
        assumeValidSDL: true,
      },
    },
  ],
  documents: ['./data/gql/query/**/*.graphql'],
  ignoreNoDocuments: false,
  generates: {
    './data/gql/generated/': {
      preset: 'client',
      config: {
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
        documentMode: 'string',
        skipTypename: true,
        skipDocumentsValidation: {
          skipValidationAgainstSchema: true,
        },
        scalars: {
          ID: {
            input: 'string',
            output: 'string',
          },
          DateTime: 'Date',
          JSON: '{ [key: string]: any }',
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
