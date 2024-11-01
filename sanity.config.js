import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { myStructure } from './deskStructure'
import { schemaTypes } from './schemaTypes'

const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000/showrooms/slc'

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
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
