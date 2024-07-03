import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { myStructure } from './deskStructure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'mldwebsite-cms',

  projectId: 'mmqkqmu2',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
