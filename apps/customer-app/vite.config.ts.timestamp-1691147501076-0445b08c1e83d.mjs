// vite.config.ts
import CoreAlias from "file:///D:/Prodkt/Prodkt-Frontend/packages/alias/index.js";
import react from "file:///D:/Prodkt/Prodkt-Frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { visualizer } from "file:///D:/Prodkt/Prodkt-Frontend/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig } from "file:///D:/Prodkt/Prodkt-Frontend/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///D:/Prodkt/Prodkt-Frontend/node_modules/vite-plugin-pwa/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Prodkt\\Prodkt-Frontend\\apps\\customer-app";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      react(),
      // // For Sentry Config
      // sentryVitePlugin({
      //   org: '',
      //   project: '',
      //   // Specify the directory containing build artifacts
      //   include: './dist',
      //   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      //   // and needs the `project:releases` and `org:read` scopes
      //   authToken: env.VITE_SENTRY_AUTH_TOKEN,
      //   // Optionally uncomment the line below to override automatic release name detection
      //   // release: env.RELEASE,
      // }),
      visualizer({}),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
        workbox: {
          maximumFileSizeToCacheInBytes: 4e6
        },
        manifest: {
          name: "Prodkt",
          short_name: "Prodkt",
          display: "standalone",
          theme_color: "#0E70EB",
          background_color: "#fff",
          prefer_related_applications: true,
          scope: "/",
          start_url: "/",
          lang: "en",
          icons: [
            {
              src: "favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon"
            },
            {
              src: "android-chrome-192x192.png",
              type: "image/png",
              sizes: "192x192"
            },
            {
              src: "android-chrome-512x512.png",
              type: "image/png",
              sizes: "512x512"
            }
          ]
        },
        devOptions: {
          enabled: false
        }
      })
    ],
    server: {
      port: 3e3
    },
    preview: {
      port: 4e3
    },
    resolve: {
      alias: [
        ...CoreAlias,
        {
          find: "@router",
          replacement: path.join(__vite_injected_original_dirname, "./src/router")
        },
        {
          find: "@pages",
          replacement: path.join(__vite_injected_original_dirname, "./src/pages")
        },
        {
          find: "@styles",
          replacement: path.join(__vite_injected_original_dirname, "./src/styles")
        }
      ]
    },
    build: {
      // // For Sentry Config
      // sourcemap: true,
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ka3RcXFxcUHJvZGt0LUZyb250ZW5kXFxcXGFwcHNcXFxcY3VzdG9tZXItYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9ka3RcXFxcUHJvZGt0LUZyb250ZW5kXFxcXGFwcHNcXFxcY3VzdG9tZXItYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9ka3QvUHJvZGt0LUZyb250ZW5kL2FwcHMvY3VzdG9tZXItYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IENvcmVBbGlhcyBmcm9tICdAY29yZS9hbGlhcyc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcblxyXG4vLyAvL0ZvciBTZW50cnkgQ29uZmlnXHJcbi8vIGltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJztcclxuLy8gaW1wb3J0IHsgbG9hZEVudiAgfSBmcm9tICd2aXRlJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcbiAgLy8gLy9Gb3IgU2VudHJ5IENvbmZpZ1xyXG4gIC8vIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIC8vIC8vR2V0IHRoZSBtb2RlIGZyb20gdGhlIGFib3ZlIGNhbGxiYWNrIGZ1bmN0aW9uIGxpa2UgKHttb2RlfSk9PlxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCgpLFxyXG4gICAgICAvLyAvLyBGb3IgU2VudHJ5IENvbmZpZ1xyXG4gICAgICAvLyBzZW50cnlWaXRlUGx1Z2luKHtcclxuICAgICAgLy8gICBvcmc6ICcnLFxyXG4gICAgICAvLyAgIHByb2plY3Q6ICcnLFxyXG5cclxuICAgICAgLy8gICAvLyBTcGVjaWZ5IHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyBidWlsZCBhcnRpZmFjdHNcclxuICAgICAgLy8gICBpbmNsdWRlOiAnLi9kaXN0JyxcclxuXHJcbiAgICAgIC8vICAgLy8gQXV0aCB0b2tlbnMgY2FuIGJlIG9idGFpbmVkIGZyb20gaHR0cHM6Ly9zZW50cnkuaW8vc2V0dGluZ3MvYWNjb3VudC9hcGkvYXV0aC10b2tlbnMvXHJcbiAgICAgIC8vICAgLy8gYW5kIG5lZWRzIHRoZSBgcHJvamVjdDpyZWxlYXNlc2AgYW5kIGBvcmc6cmVhZGAgc2NvcGVzXHJcbiAgICAgIC8vICAgYXV0aFRva2VuOiBlbnYuVklURV9TRU5UUllfQVVUSF9UT0tFTixcclxuXHJcbiAgICAgIC8vICAgLy8gT3B0aW9uYWxseSB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gb3ZlcnJpZGUgYXV0b21hdGljIHJlbGVhc2UgbmFtZSBkZXRlY3Rpb25cclxuICAgICAgLy8gICAvLyByZWxlYXNlOiBlbnYuUkVMRUFTRSxcclxuICAgICAgLy8gfSksXHJcbiAgICAgIHZpc3VhbGl6ZXIoe30pIGFzIFBsdWdpbk9wdGlvbixcclxuICAgICAgVml0ZVBXQSh7XHJcbiAgICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZyddLFxyXG4gICAgICAgIHdvcmtib3g6IHtcclxuICAgICAgICAgIG1heGltdW1GaWxlU2l6ZVRvQ2FjaGVJbkJ5dGVzOiA0MDAwMDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgIG5hbWU6ICdQcm9ka3QnLFxyXG4gICAgICAgICAgc2hvcnRfbmFtZTogJ1Byb2RrdCcsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXHJcbiAgICAgICAgICB0aGVtZV9jb2xvcjogJyMwRTcwRUInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgc2NvcGU6ICcvJyxcclxuICAgICAgICAgIHN0YXJ0X3VybDogJy8nLFxyXG4gICAgICAgICAgbGFuZzogJ2VuJyxcclxuICAgICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6ICdmYXZpY29uLmljbycsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6ICc2NHg2NCAzMngzMiAyNHgyNCAxNngxNicsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3gtaWNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6ICdhbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYzogJ2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldk9wdGlvbnM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBwb3J0OiAzMDAwLFxyXG4gICAgfSxcclxuICAgIHByZXZpZXc6IHtcclxuICAgICAgcG9ydDogNDAwMCxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgLi4uQ29yZUFsaWFzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbmQ6ICdAcm91dGVyJyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvcm91dGVyJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaW5kOiAnQHBhZ2VzJyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpbmQ6ICdAc3R5bGVzJyxcclxuICAgICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAvLyAvLyBGb3IgU2VudHJ5IENvbmZpZ1xyXG4gICAgICAvLyBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULE9BQU8sZUFBZTtBQUNuVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsb0JBQWtDO0FBQzNDLFNBQVMsZUFBZTtBQUx4QixJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUtoQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFnQk4sV0FBVyxDQUFDLENBQUM7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGVBQWUsQ0FBQyxlQUFlLHNCQUFzQjtBQUFBLFFBQ3JELFNBQVM7QUFBQSxVQUNQLCtCQUErQjtBQUFBLFFBQ2pDO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixZQUFZO0FBQUEsVUFDWixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsVUFDYixrQkFBa0I7QUFBQSxVQUNsQiw2QkFBNkI7QUFBQSxVQUM3QixPQUFPO0FBQUEsVUFDUCxXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsT0FBTztBQUFBLGNBQ1AsTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUEsY0FDTixPQUFPO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQSxjQUNOLE9BQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNWLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxLQUFLLEtBQUssa0NBQVcsY0FBYztBQUFBLFFBQ2xEO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxLQUFLLEtBQUssa0NBQVcsYUFBYTtBQUFBLFFBQ2pEO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxLQUFLLEtBQUssa0NBQVcsY0FBYztBQUFBLFFBQ2xEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHUDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
