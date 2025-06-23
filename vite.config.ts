import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// export const REPO_PREFIX='o'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:`/`
})