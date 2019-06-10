const path = require('path');
module.exports = {
    devServer:{
        proxy: {
            '/Service': {
                target: 'http://m.mtime.cn',
                changeOrigin: true
            },
            '/api': {
                target: 'https://ticket-m.mtime.cn',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@api': path.resolve(__dirname, './src/api'),
                '@common': path.resolve(__dirname, './src/common'),
                '@utils': path.resolve(__dirname, './src/utils'),
                '@components': path.resolve(__dirname, './src/components'),
                '@common': path.resolve(__dirname, './src/common'),
                '@views': path.resolve(__dirname, './src/views'),
                '@filters': path.resolve(__dirname, './src/filters')
            }
        }
    }
}