import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.spacex.land/graphql/',
  documents: 'graphql/**/*.graphql',
  generates: {
    'generatedTypes/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
