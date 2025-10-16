import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import externalGlobals from 'rollup-plugin-external-globals'

const config = {
  base: `/`,
  plugins: [ 
    vue(),
    {
      ...AutoImport({
      imports: ["vue"],
    })
    }, 
      {
      ...externalGlobals({
        vue: 'Vue', 
      }),
      enforce: 'post', // 注意这里也要加上post ，不然上面AutoImport 又会后执行
    },
  ],  
  build: {
    // minify: false, // 禁用代码压缩混淆
    // sourcemap: true, // 生成 sourcemap 便于调试
    rollupOptions: {  
      //  treeshake: false, // 禁用 tree shaking
      //  output: {
      //   compact: false, // 不压缩代码
      // },
      external: ['vue'], // 告诉 Rollup 不要将 'vue' 打包进输出文件
      plugins: [
        externalGlobals({
          vue: 'Vue',  // import vue → window.Vue 
        })
      ],
    }
  }  
};

console.log(config)
export default defineConfig(config)