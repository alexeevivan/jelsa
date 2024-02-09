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
