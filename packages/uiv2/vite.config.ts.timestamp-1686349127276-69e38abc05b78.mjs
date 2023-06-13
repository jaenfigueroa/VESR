// vite.config.ts
import path from "path";
import react from "file:///C:/Users/jaenf/Desktop/vesr/packages/uiv2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/jaenf/Desktop/vesr/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/jaenf/Desktop/vesr/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\jaenf\\Desktop\\vesr\\packages\\uiv2";
var vite_config_default = defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/main.tsx"),
      name: "uiv2",
      formats: ["es", "umd"],
      fileName: (format) => `uiv2.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqYWVuZlxcXFxEZXNrdG9wXFxcXHZlc3JcXFxccGFja2FnZXNcXFxcdWl2MlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcamFlbmZcXFxcRGVza3RvcFxcXFx2ZXNyXFxcXHBhY2thZ2VzXFxcXHVpdjJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2phZW5mL0Rlc2t0b3AvdmVzci9wYWNrYWdlcy91aXYyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSxkdHMoe2luc2VydFR5cGVzRW50cnk6IHRydWV9KV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHN4JyksXHJcbiAgICAgICAgbmFtZTogJ3VpdjInLFxyXG4gICAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXHJcbiAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB1aXYyLiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScgXSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJULE9BQU8sVUFBVTtBQUM1VSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUUsSUFBSSxFQUFDLGtCQUFrQixLQUFJLENBQUMsQ0FBQztBQUFBLEVBQy9DLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNELE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsUUFBUTtBQUFBLElBQ2xDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsU0FBUyxXQUFZO0FBQUEsTUFDaEMsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0EsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
