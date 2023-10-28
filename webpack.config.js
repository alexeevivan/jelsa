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
			chunks: "initial",
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
		main: {
			import: "./js/index.js",
		},
		gallery: {
			import: "./js/gallery.js"
		},
		expanded: {
			import: "./js/expanded.js"
		},
		circles: {
			import: "./js/circles.js"
		},
		contact: {
			import: "./js/contact.js"
		},
		restaurant: {
			import: "./js/restaurant.js"
		},
		photo_report: {
			import: "./js/photo_report.js"
		},
		faq: {
			import: "./js/faq.js"
		}
		,
		panoramic: {
			import: "./js/panoramic.js"
		},
		barList: {
			import: "./js/bar-list.js"
		},
		barListSlider: "./js/components/bar-list-slider.js",
	},
	output: {
		filename: "assets/js/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/content/[name][ext]",
	},
	resolve: {
		extensions: [
			".js", ".json", ".css", ".jpg", ".jpeg", ".png", ".svg"
		],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@content": path.resolve(__dirname, "src/assets/content/"),
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
				filename: "./index.html",
				template: "./index.html",
				minify: {
					collapseWhitespace: isProd
				},
				include: /\/includes/,
				chunks: ["main", "expanded", "circles"],
				cache: false,
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./gallery.html",
				template: "./gallery.html",
				minify: {
					collapseWhitespace: isProd
				},
				include: /\/includes/,
				chunks: ["main", "gallery"],
				cache: false,
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./view-tour-1.html",
				template: "./view-tour-1.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["panoramic"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./contact.html",
				template: "./contact.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "contact"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./restaurant.html",
				template: "./restaurant.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "restaurant"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo_report.html",
				template: "./photo_report.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "photo_report"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./faq.html",
				template: "./faq.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "faq"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./bar-list.html",
				template: "./bar-list.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["barList", "barListSlider"]
			}
		),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.resolve(__dirname, "src/assets/"),
						to: path.resolve(__dirname, "dist/assets")
					},
				]
			}
		),
		new MiniCssExtractPlugin(
			{
				filename: "assets/styles/[name].css",
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
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/content/[name].[ext]",
				},
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
				generator: {
					filename: "assets/svg/[name][ext]",
				},
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext]",
				},
			}
		]
	},
}