const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js", // 入口文件
	output: {
		path: __dirname + "/build", // 打包后的文件存放位置
		filename: "bundle.js" // 打包后输出的文件的文件名
	},
	devServer: {
		contentBase: "./build", // 本地服务器所加载的页面
		historyApiFallback: true,// 不跳转
		inline: true, // 实时刷新
		hot: true
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},{
						loader: "css-loader",
						options: {
							modules: true, // 指定启用css modules
							localIdentName: '[name]_[local]--[hash:base64:5]'
						}
					},{
						loader: "postcss-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin() // 热加载插件
	]
}































