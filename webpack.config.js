const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const pagesConfig = require("./webpack.pages.js");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

// Функция для генерации HTMLWebpackPlugin из конфигурации
const generateHtmlPlugins = () => {
	return Object.entries(pagesConfig).map(([filename, config]) => {
		return new HTMLWebpackPlugin({
			filename: `./${filename}`,
			template: `./${filename}`,
			minify: {
				collapseWhitespace: isProd
			},
			include: config.include || undefined,
			chunks: config.chunks,
			cache: false,
		});
	});
};

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
		cartel: {
			import: "./js/cartel.js"
		},
		photo_report: {
			import: "./js/photo-report.js"
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
		partyPage: {
			import: "./js/party-page.js"
		},
		specialOffer: {
			import: "./js/special-offer-page.js"
		},
		barListSlider: "./js/components/bar-list-slider.js",
		galleryImgLightbox: "./js/components/gallery-img-lightbox.js",
		telegramLogic: './js/telegramLogic.js',
		langSwapMain: "./js/translations/lang-swap-main.js",
		langSwapGallery: "./js/translations/lang-swap-gallery.js",
		langSwapView: "./js/translations/lang-swap-view.js",
		langSwapContact: "./js/translations/lang-swap-contact.js",
		langSwapRestaurant: "./js/translations/lang-swap-restaurant.js",
		langSwapAlbum: "./js/translations/lang-swap-album.js",
		langSwapAlbumReport: "./js/translations/lang-swap-album-report.js",
		langSwapSpecial: "./js/translations/lang-swap-special.js",
		langSwapFaq: "./js/translations/lang-swap-faq.js",
		langSwapBar: "./js/translations/lang-swap-bar.js",
	},
	output: {
		filename: "assets/js/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[path][name][ext]",
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
		fallback: {
			"fs": false,
			"tls": false,
			"net": false,
			"path": false,
			"zlib": false,
			"http": false,
			"https": false,
			"stream": false,
			"crypto": false,
			"buffer": false,
			"querystring": false
		}
	},
	target: 'web',
	devServer: {
		port: 4300,
		hot: isDev
	},
	devtool: isProd ? false : "source-map",
	optimization: optimization(),
	plugins: [
		// Автоматическая генерация HTMLWebpackPlugin из webpack.pages.js
		...generateHtmlPlugins(),
		// new CleanWebpackPlugin(), // Временно отключен из-за проблем с правами
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.resolve(__dirname, "src/assets/"),
						to: path.resolve(__dirname, "dist/assets"),
						globOptions: isProd ? {
							ignore: [
								'**/*.jpg',
								'**/*.jpeg',
								'**/*.png',
							]
						} : {}
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
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								quietDeps: true,
								silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
							},
						},
					}
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/content/[path][name][ext]",
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