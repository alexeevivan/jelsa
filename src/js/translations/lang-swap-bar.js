// Импорт файлов с переводами
import translationsRU from "../translations/bar/ru-bar.json";
import translationsEN from "../translations/bar/en-bar.json";

// Функция для сохранения выбранного языка в localStorage
function saveLanguageToStorage(language) {
	localStorage.setItem("selectedLanguage", language);
}

// Функция для получения выбранного языка из localStorage
function getLanguageFromStorage() {
	return localStorage.getItem("selectedLanguage") || "ru"; // По умолчанию русский
}

// Функция для установки языка на странице
function setLanguage(language) {
	const translations = language === "en" ? translationsEN : translationsRU;

	// Обновление контента на странице с учетом выбранного языка
	document.getElementById("gallery-link").innerText = translations.галерея;
	document.getElementById("photo-reports-link").innerText = translations.фотоотчеты;
	document.getElementById("restaurant-link").innerText = translations.ресторан;
	document.getElementById("faq-link").innerText = translations.faq;
	document.getElementById("contacts-link").innerText = translations.контакты;
	document.getElementById("langSwap__inner").innerText = translations.en;
	document.getElementById("langSwap-mobile__inner").innerText = translations.en__inner;
	document.getElementById("m-gallery-link").innerText = translations.галерея;
	document.getElementById("m-photo-reports-link").innerText = translations.фотоотчеты;
	document.getElementById("m-restaurant-link").innerText = translations.ресторан;
	document.getElementById("m-faq-link").innerText = translations.faq;
	document.getElementById("m-contacts-link").innerText = translations.контакты;
	document.getElementById("company_name").innerText = translations.вокал_индастрит;
	document.getElementById("privacy-policy").innerText = translations.политика_конфиденциальности;
	document.getElementById("product-slider__name-aperitif").innerText = translations.аперитив;
	document.getElementById("product-slider__name-spirit").innerText = translations.крепкий_алкоголь;
	document.getElementById("product-labels__title-wine").innerText = translations.вино;
	document.getElementById("product-labels__title-bitter").innerText = translations.биттер;
	document.getElementById("product-labels__title-vermouth").innerText = translations.вермут;
	document.getElementById("product-labels__title-tequila").innerText = translations.текила;
	document.getElementById("product-labels__title-rum").innerText = translations.ром;
	document.getElementById("product-labels__title-cognac").innerText = translations.коньяк;
	document.getElementById("product-labels__title-whiskey").innerText = translations.виски;
	document.getElementById("product-labels__title-gin").innerText = translations.джин;
	document.getElementById("product-labels__title-vodka").innerText = translations.водка;
	document.getElementById("product-slider__price-aperitif").innerText = translations.от;
	document.getElementById("product-slider__price-spirit").innerText = translations.предлог;
	document.getElementById("dom-perignon-m__description").innerText = translations.dom_perignon_m__description;
	document.getElementById("dom-perignon-m__region").innerText = translations.dom_perignon_m__region;
	document.getElementById("dom-perignon-m__region-name").innerText = translations.dom_perignon_m__region_name;
	document.getElementById("dom-perignon-m__grape").innerText = translations.dom_perignon_m__grape;
	document.getElementById("dom-perignon-m__grape-name").innerText = translations.dom_perignon_m__grape_name;
	document.getElementById("dom-perignon-m__aroma").innerText = translations.dom_perignon_m__aroma;
	document.getElementById("dom-perignon-m__aroma-name").innerText = translations.dom_perignon_m__aroma_name;
	document.getElementById("dom-perignon-m__volume").innerText = translations.dom_perignon_m__volume;
	document.getElementById("dom-perignon-m__volume-name").innerText = translations.dom_perignon_m__volume_name;
	document.getElementById("dom-perignon__description").innerText = translations.dom_perignon__description;
	document.getElementById("dom-perignon__region").innerText = translations.dom_perignon__region;
	document.getElementById("dom-perignon__region-name").innerText = translations.dom_perignon__region_name;
	document.getElementById("dom-perignon__grape").innerText = translations.dom_perignon__grape;
	document.getElementById("dom-perignon__grape-name").innerText = translations.dom_perignon__grape_name;
	document.getElementById("dom-perignon__aroma").innerText = translations.dom_perignon__aroma;
	document.getElementById("dom-perignon__aroma-name").innerText = translations.dom_perignon__aroma_name;
	document.getElementById("dom-perignon__volume").innerText = translations.dom_perignon__volume;
	document.getElementById("dom-perignon__volume-name").innerText = translations.dom_perignon__volume_name;
	document.getElementById("open-bar-list").innerText = translations.меню;
	document.getElementById("veuve__description").innerText = translations.veuve__description;
	document.getElementById("veuve__region").innerText = translations.veuve__region;
	document.getElementById("veuve__region-name").innerText = translations.veuve__region_name;
	document.getElementById("veuve__grape").innerText = translations.veuve__grape;
	document.getElementById("veuve__grape-name").innerText = translations.veuve__grape_name;
	document.getElementById("veuve__aroma").innerText = translations.veuve__aroma;
	document.getElementById("veuve__aroma-name").innerText = translations.veuve__aroma_name;
	document.getElementById("veuve__volume").innerText = translations.veuve__volume;
	document.getElementById("veuve__volume-name").innerText = translations.veuve__volume_name;
	document.getElementById("veuve-r__description").innerText = translations.veuve_r__description;
	document.getElementById("veuve-r__region").innerText = translations.veuve_r__region;
	document.getElementById("veuve-r__region-name").innerText = translations.veuve_r__region_name;
	document.getElementById("veuve-r__grape").innerText = translations.veuve_r__grape;
	document.getElementById("veuve-r__grape-name").innerText = translations.veuve_r__grape_name;
	document.getElementById("veuve-r__aroma").innerText = translations.veuve_r__aroma;
	document.getElementById("veuve-r__aroma-name").innerText = translations.veuve_r__aroma_name;
	document.getElementById("veuve-r__volume").innerText = translations.veuve_r__volume;
	document.getElementById("veuve-r__volume-name").innerText = translations.veuve_r__volume_name;
	document.getElementById("moet__description").innerText = translations.moet__description;
	document.getElementById("moet__region").innerText = translations.moet__region;
	document.getElementById("moet__region-name").innerText = translations.moet__region_name;
	document.getElementById("moet__grape").innerText = translations.moet__grape;
	document.getElementById("moet__grape-name").innerText = translations.moet__grape_name;
	document.getElementById("moet__aroma").innerText = translations.moet__aroma;
	document.getElementById("moet__aroma-name").innerText = translations.moet__aroma_name;
	document.getElementById("moet__volume").innerText = translations.moet__volume;
	document.getElementById("moet__volume-name").innerText = translations.moet__volume_name;
	document.getElementById("martini-p__description").innerText = translations.martini_p__description;
	document.getElementById("martini-p__region").innerText = translations.martini_p__region;
	document.getElementById("martini-p__region-name").innerText = translations.martini_p__region_name;
	document.getElementById("martini-p__grape").innerText = translations.martini_p__grape;
	document.getElementById("martini-p__grape-name").innerText = translations.martini_p__grape_name;
	document.getElementById("martini-p__aroma").innerText = translations.martini_p__aroma;
	document.getElementById("martini-p__aroma-name").innerText = translations.martini_p__aroma_name;
	document.getElementById("martini-p__volume").innerText = translations.martini_p__volume;
	document.getElementById("martini-p__volume-name").innerText = translations.martini_p__volume_name;
	document.getElementById("martini-a__description").innerText = translations.martini_a__description;
	document.getElementById("martini-a__region").innerText = translations.martini_a__region;
	document.getElementById("martini-a__region-name").innerText = translations.martini_a__region_name;
	document.getElementById("martini-a__grape").innerText = translations.martini_a__grape;
	document.getElementById("martini-a__grape-name").innerText = translations.martini_a__grape_name;
	document.getElementById("martini-a__aroma").innerText = translations.martini_a__aroma;
	document.getElementById("martini-a__aroma-name").innerText = translations.martini_a__aroma_name;
	document.getElementById("martini-a__volume").innerText = translations.martini_a__volume;
	document.getElementById("martini-a__volume-name").innerText = translations.martini_a__volume_name;
}

// Пример переключения языка по кнопке
const languageSwitchButton = document.getElementById("langSwap");

languageSwitchButton.addEventListener("click", () => {
	const currentLanguage = languageSwitchButton.dataset.language;
	const newLanguage = currentLanguage === "ru" ? "en" : "ru";

	// Сохранение выбранного языка в localStorage
	saveLanguageToStorage(newLanguage);

	// Обновление атрибута и установка нового языка
	languageSwitchButton.dataset.language = newLanguage;
	setLanguage(newLanguage);
});

// Пример переключения языка по кнопке (мобильные устройства)
const languageSwitchButtonMobile = document.getElementById("langSwap-mobile");

languageSwitchButtonMobile.addEventListener("click", () => {
	const currentLanguage = languageSwitchButtonMobile.dataset.language;
	const newLanguage = currentLanguage === "ru" ? "en" : "ru";

	// Сохранение выбранного языка в localStorage
	saveLanguageToStorage(newLanguage);

	// Обновление атрибута и установка нового языка
	languageSwitchButtonMobile.dataset.language = newLanguage;
	setLanguage(newLanguage);
});

// Инициализация языка при загрузке страницы (например, согласно предпочтениям пользователя)
const selectedLanguage = getLanguageFromStorage();
setLanguage(selectedLanguage);
