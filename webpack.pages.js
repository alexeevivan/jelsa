// Маппинг HTML-страниц и их чанков для автоматической генерации HTMLWebpackPlugin
module.exports = {
	// Основные страницы
	'index.html': {
		chunks: ['main', 'expanded', 'circles', 'telegramLogic', 'langSwapMain'],
		include: /\/includes/,
	},
	'gallery.html': {
		chunks: ['main', 'gallery', 'galleryImgLightbox', 'langSwapGallery'],
		include: /\/includes/,
	},
	'googlef9c16ee7205e64de.html': {
		chunks: ['main'],
		include: /\/includes/,
	},
	'view-tour-1.html': {
		chunks: ['panoramic', 'langSwapView'],
	},
	'contact.html': {
		chunks: ['main', 'contact', 'langSwapContact'],
	},
	'restaurant.html': {
		chunks: ['main', 'restaurant', 'langSwapRestaurant'],
	},
	'cartel.html': {
		chunks: ['main', 'cartel'],
	},
	'photo-report.html': {
		chunks: ['main', 'photo_report', 'langSwapAlbum'],
	},
	'faq.html': {
		chunks: ['main', 'faq', 'langSwapFaq'],
	},
	'bar-list.html': {
		chunks: ['barList', 'barListSlider', 'langSwapBar'],
	},

	// Фотоотчеты
	'photo-report/party-ussr.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-jelsashian.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-jingle-bells.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-sport-n-buhlo.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-halloween-25.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-find-ur-love.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-airlines.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-fabrika.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-women-day.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-bathhouse.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-airlines-summer.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-cruise.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-red-luxe.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-halloween.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-summer.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-eve-wknd.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-old-ny24.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-valentines.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-money-heist.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-theatrical.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-iwd.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-man.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-school.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-new-year-2024.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-new-year-2026.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-victoria-secret-night.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-love.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},
	'photo-report/party-birthday.html': {
		chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
	},

	// Ресторан
	'restaurant/special-offer.html': {
		chunks: ['main', 'specialOffer', 'langSwapSpecial'],
	},
};
