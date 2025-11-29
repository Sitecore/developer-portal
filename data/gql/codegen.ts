import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      './data/gql/schema/schema.graphql': {
        assumeValidSDL: true,
      },
    }
    /* {
      '<<GQL URI>>': {
        headers: {
          authorization: 'Bearer ey...'
        }
      }
    } */
  ],
  documents: ['./data/gql/query/**/*.graphql'],
  ignoreNoDocuments: false,
  generates: {
    /* './data/gql/schema/schema.graphql': {
       plugins: ['schema-ast'],
       config: {
         includeDirectives: true
       },
    }, */
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
          CustomDateTime: 'Date',
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
