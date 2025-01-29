import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
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
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
