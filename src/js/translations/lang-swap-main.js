// Импорт файлов с переводами
import translationsRU from "../translations/main/ru-main.json";
import translationsEN from "../translations/main/en-main.json";

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
	document.getElementById("langSwap__inner").innerText = translations.en;
	document.getElementById("langSwap-mobile__inner").innerText = translations.en__inner;
	document.getElementById("modal-head-date").innerText = translations.дата;
	document.getElementById("modal-head-line").innerText = translations.шоу_программа;
	document.getElementById("modal-head-set").innerText = translations.сет;
	document.getElementById("modal-details").innerText = translations.подробности;
	document.getElementById("modal-close-btn").innerText = translations.закрыть;
	document.getElementById("karaoke-header").innerText = translations.караоке;
	document.getElementById("m-karaoke-header").innerText = translations.караоке;
	document.getElementById("modal-close-btn").innerText = translations.закрыть;
	document.getElementById("karaoke-description").innerText = translations.Караоке_клуб_JELSA
	document.getElementById("m-karaoke-description").innerText = translations.Караоке_клуб
	document.getElementById("restaurant-header").innerText = translations.рестор
	document.getElementById("m-restaurant-header").innerText = translations.рестор
	document.getElementById("bar-header").innerText = translations.бар
	document.getElementById("m-bar-header").innerText = translations.бар
	document.getElementById("restaurant-description").innerText = translations.ощутите
	document.getElementById("m-restaurant-description").innerText = translations.ощутите
	document.getElementById("bar-list-link").innerText = translations.барное;
	document.getElementById("m-bar-list-link").innerText = translations.барное;
	document.getElementById("cuisine-description").innerText = translations.в_основе;
	document.getElementById("m-cuisine-description").innerText = translations.в_основе;
	document.getElementById("menu-list-link").innerText = translations.меню;
	document.getElementById("m-menu-list-link").innerText = translations.меню;
	document.getElementById("hall-choice").innerText = translations.выберите_стол;
	document.getElementById("virtual-scene").innerText = translations.виртуальная_сцена;
	document.getElementById("virtual-bar").innerText = translations.виртуальный_бар;
	document.getElementById("hall__free-entry").innerText = translations.вход;
	document.getElementById("hall__capacity").innerText = translations.вместимость;
	document.getElementById("hall__privacy").innerText = translations.приватность;
	document.getElementById("hall__secret").innerText = translations.секрет;
	document.getElementById("hall__reserve-link").innerText = translations.забронировать;
	document.getElementById("footer__company-name").innerText = translations.вокал_индастрит;
	document.getElementById("footer__privacy-policy").innerText = translations.политика_конфиденциальности;
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
