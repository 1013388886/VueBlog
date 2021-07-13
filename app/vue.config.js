const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end();
        }
        config.externals({
            'wangeditor': 'wangEditor',
        })
        config.plugins.delete('prefetch')
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        algorithm: "gzip",
                        test: /\.js$|\.css$|\.html$/, //压缩类型
                        threshold: 10240, //超过就要压缩的大小
                        deleteOriginalAssets: false,

                    })
                ]
            }
        }
    }
}