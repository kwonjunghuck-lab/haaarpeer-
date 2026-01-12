import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 청크 크기 경고 제한을 1000kB(1MB)로 상향 조정
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 라이브러리별로 파일을 분리하여 로딩 성능 최적화 (Code Splitting)
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts'],
          ui: ['lucide-react']
        }
      }
    }
  }
});