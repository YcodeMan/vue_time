module.exports = {
    devServer:{
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
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
                '@components': path.resolve(__dirname, './src/components')
            }
        }
    }
}