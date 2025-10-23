const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//配置跨域
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8443',//目标后端api地址
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''//重写路径：去掉路径中的/api
                }
            }
        }
    }
}
