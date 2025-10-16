import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import cdnImport from "vite-plugin-cdn-import";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   imports: ["vue"],
    // }),

    cdnImport({
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "https://unpkg.com/vue@3.5.10/dist/vue.global.prod.js",
        },
      ],
    }),
  ],
  base: `/`,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 将大的库单独打包 
            if (id.includes("element-plus")) return "vendor-element";

            // 其他第三方库按类别分组
            if (id.includes("vue")) return "vendor-vue"; 
            console.log(id)
            return "vendor";
          }
        },
      },
    },
  },
});