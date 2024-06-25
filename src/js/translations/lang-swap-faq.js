// Импорт файлов с переводами
import translationsRU from "../translations/faq/ru-faq.json";
import translationsEN from "../translations/faq/en-faq.json";

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
	document.getElementById("faq-translate-header-1").innerText = translations.детское_мероприятие;
	document.getElementById("faq-translate-header-2").innerText = translations.навынос;
	document.getElementById("faq-translate-header-3").innerText = translations.отдельные_залы;
	document.getElementById("faq-translate-header-4").innerText = translations.корпоратив;
	document.getElementById("faq-translate-answer-1").innerText = translations.детское_мероприятие_ответ;
	document.getElementById("faq-translate-answer-2").innerText = translations.навынос_ответ;
	document.getElementById("faq-translate-answer-3").innerText = translations.отдельные_залы_ответ;
	document.getElementById("faq-translate-answer-4").innerText = translations.корпоратив_ответ;
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
