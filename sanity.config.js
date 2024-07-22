import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
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
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
