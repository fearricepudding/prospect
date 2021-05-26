const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./ui/src/index.js",
	mode: "development",
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
    module:{
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: 'core.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};
