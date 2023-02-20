const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: "all",
		}
	}

	if (isProd) {
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin()
		]
	}

	return config
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: {
		main: "./js/index.js",
		expanded: "./js/expanded.js",
	},
	output: {
		filename: filename("js"),
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [
			".js", ".json", ".css", ".jpg", ".jpeg", ".png", ".svg"
		],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@content": path.resolve(__dirname, "src/assets/content"),
			"@svg": path.resolve(__dirname, "src/assets/svg"),
			"@fonts": path.resolve(__dirname, "src/assets/fonts"),
			"@styles": path.resolve(__dirname, "src/styles"),
		},
	},
	devServer: {
		port: 4300,
		hot: isDev
	},
	devtool: isProd ? false : "source-map",
	optimization: optimization(),
	plugins: [
		new HTMLWebpackPlugin(
			{
				template: "./index.html",
				minify: {
					collapseWhitespace: isProd
				},
				include: /\/includes/,
			}
		),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.resolve(__dirname, "src/assets/"),
						to: path.resolve(__dirname, "dist/assets")
					}
				]
			}
		),
		new MiniCssExtractPlugin(
			{
				filename: filename("css"),
			}
		)
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader"
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				type: "asset/resource",
			},
			{
				test: /\.svg$/,
				use: ["svg-inline-loader"],
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: "asset/resource",
			},
		]
	},
}