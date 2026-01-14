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
		assetModuleFilename: "assets/content/[path][name][ext]",
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
			"buffer": require.resolve("buffer/"),
			"crypto-browserify": require.resolve('crypto-browserify'),
			"querystring": require.resolve("querystring-es3")
		} //if you want to use this module also don't forget npm i crypto-browserify
	},
	target: 'web',
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
				chunks: ["main", "expanded", "circles", "telegramLogic", "langSwapMain"],
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
				chunks: ["main", "gallery", "galleryImgLightbox", "langSwapGallery"],
				cache: false,
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./googlef9c16ee7205e64de.html",
				template: "./googlef9c16ee7205e64de.html",
				minify: {
					collapseWhitespace: isProd
				},
				include: /\/includes/,
				chunks: ["main"],
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
				chunks: ["panoramic", "langSwapView"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./contact.html",
				template: "./contact.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "contact", "langSwapContact"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./restaurant.html",
				template: "./restaurant.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "restaurant", "langSwapRestaurant"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./cartel.html",
				template: "./cartel.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "cartel"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report.html",
				template: "./photo-report.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "photo_report", "langSwapAlbum"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-ussr.html",
				template: "./photo-report/party-ussr.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-jelsashian.html",
				template: "./photo-report/party-jelsashian.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-jingle-bells.html",
				template: "./photo-report/party-jingle-bells.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-sport-n-buhlo.html",
				template: "./photo-report/party-sport-n-buhlo.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-halloween-25.html",
				template: "./photo-report/party-halloween-25.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-find-ur-love.html",
				template: "./photo-report/party-find-ur-love.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-airlines.html",
				template: "./photo-report/party-airlines.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-fabrika.html",
				template: "./photo-report/party-fabrika.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-women-day.html",
				template: "./photo-report/party-women-day.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-bathhouse.html",
				template: "./photo-report/party-bathhouse.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-airlines-summer.html",
				template: "./photo-report/party-airlines-summer.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-cruise.html",
				template: "./photo-report/party-cruise.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-red-luxe.html",
				template: "./photo-report/party-red-luxe.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-halloween.html",
				template: "./photo-report/party-halloween.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-summer.html",
				template: "./photo-report/party-summer.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-eve-wknd.html",
				template: "./photo-report/party-eve-wknd.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-old-ny24.html",
				template: "./photo-report/party-old-ny24.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-valentines.html",
				template: "./photo-report/party-valentines.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-money-heist.html",
				template: "./photo-report/party-money-heist.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-theatrical.html",
				template: "./photo-report/party-theatrical.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-iwd.html",
				template: "./photo-report/party-iwd.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-man.html",
				template: "./photo-report/party-man.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-school.html",
				template: "./photo-report/party-school.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-new-year-2024.html",
				template: "./photo-report/party-new-year-2024.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./photo-report/party-new-year-2026.html",
				template: "./photo-report/party-new-year-2026.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "partyPage", "galleryImgLightbox", "langSwapAlbumReport"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./restaurant/special-offer.html",
				template: "./restaurant/special-offer.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "specialOffer", "langSwapSpecial"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./faq.html",
				template: "./faq.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["main", "faq", "langSwapFaq"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: "./bar-list.html",
				template: "./bar-list.html",
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["barList", "barListSlider", "langSwapBar"]
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