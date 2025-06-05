// Импорт файлов с переводами
import translationsRU from "../translations/album/ru-album.json";
import translationsEN from "../translations/album/en-album.json";

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
	document.getElementById("gallery__info-translate-1").innerText = translations.вечер;
	document.getElementById("gallery__info-translate-2").innerText = translations.вечеринка_в;
	document.getElementById("gallery__info-translate-3").innerText = translations.вечеринка_в_стиле;
	document.getElementById("gallery__info-translate-4").innerText = translations.день_женщин;
	document.getElementById("gallery__info-translate-5").innerText = translations.джельсашъян;
	document.getElementById("gallery__info-translate-6").innerText = translations.день_защитника;
	document.getElementById("gallery__info-translate-7").innerText = translations.день_валентина;
	document.getElementById("gallery__info-translate-8").innerText = translations.новый_год;
	document.getElementById("gallery__info-translate-8").innerText = translations.шашлычок;
	document.getElementById("gallery__info-translate-9").innerText = translations.лето;
	document.getElementById("gallery__info-translate-10").innerText = translations.предновогодняя;
	document.getElementById("gallery__info-translate-11").innerText = translations.старый_новый_год;
	document.getElementById("gallery__info-translate-12").innerText = translations.хэллоуин;
	document.getElementById("gallery__info-translate-13").innerText = translations.ред_люкс;
	document.getElementById("gallery__info-translate-14").innerText = translations.джингл_беллс;
	document.getElementById("gallery__info-translate-15").innerText = translations.спорт_бухло;
	document.getElementById("gallery__info-translate-16").innerText = translations.банный_день;
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
