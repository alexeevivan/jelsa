// Импорт файлов с переводами
import translationsRU from "../translations/contact/ru-contact.json";
import translationsEN from "../translations/contact/en-contact.json";

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
	document.getElementById("contact-number").innerText = translations.контактный_номер;
	document.getElementById("schedule").innerText = translations.ежедневно;
	document.getElementById("our-address").innerText = translations.наш_адрес;
	document.getElementById("address").innerText = translations.немига_5;
	document.getElementById("online").innerText = translations.мы_в_сети;
	document.getElementById("karaoke-rules").innerText = translations.правила_караоке;
	document.getElementById("company_name").innerText = translations.вокал_индастрит;
	document.getElementById("privacy-policy").innerText = translations.политика_конфиденциальности;
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
