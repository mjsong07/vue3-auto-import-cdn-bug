
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
// import cdnImport from "vite-plugin-cdn-import";
import cdnImport from "./myCdnImport/index";

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
        //  {
        //   name: "element-plus",
        //   var: "ElementPlus",
        //   path: "https://unpkg.com/element-plus/dist/index.full.min.js",
        // },
      ],
    })[0],enforce:'post'}
  ],
    build: {
    // minify: false, // 禁用代码压缩混淆
    // sourcemap: true, // 生成 sourcemap 便于调试
    rollupOptions: {  
      //  treeshake: false, // 禁用 tree shaking
      //  output: {
      //   compact: false, // 不压缩代码
      // },
      external: ['vue','element-plus'], // 告诉 Rollup 不要将 'vue' 打包进输出文件
    }
  }  
}; 
console.log(config)
export default defineConfig(config)