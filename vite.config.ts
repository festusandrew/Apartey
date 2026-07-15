import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function versionStripResolver() {
  return {
    name: 'version-strip-resolver',
    resolveId(id, importer) {
      if (id.includes('@') && !id.startsWith('@/')) {
        const lastAtIndex = id.lastIndexOf('@');
        if (lastAtIndex > 0) {
          const cleanId = id.substring(0, lastAtIndex);
          return this.resolve(cleanId, importer, { skipSelf: true });
        }
      }
      return null;
    }
  }
}

export default defineConfig({
  plugins: [
    versionStripResolver(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
