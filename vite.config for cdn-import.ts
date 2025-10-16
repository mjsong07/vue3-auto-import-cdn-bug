
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import cdnImport from "vite-plugin-cdn-import";

const config = {
  base: `/`,
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
   {... cdnImport({
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "https://unpkg.com/vue@3.5.10/dist/vue.global.prod.js",
        },
      ],
    })[0],enforce:'post'}
  ]
}; 
console.log(config)
export default defineConfig(config)