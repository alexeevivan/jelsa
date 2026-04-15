# Jel'sa Karaoke Club Website

> Официальный сайт караоке-клуба **Jel'sa** (Минск, Беларусь)  
> 🌐 [jelsa.by](https://jelsa.by)

![Webpack](https://img.shields.io/badge/Webpack-163D4F?style=for-the-badge&logo=Webpack&logoColor=cyan)
![Node.js](https://img.shields.io/badge/Node.js-163D4F?style=for-the-badge&logo=nodedotjs&logoColor=cyan)
![jQuery](https://img.shields.io/badge/jQuery-163D4F?style=for-the-badge&logo=jquery&logoColor=cyan)
![Sass](https://img.shields.io/badge/Sass-163D4F?style=for-the-badge&logo=sass&logoColor=cyan)
![GSAP](https://img.shields.io/badge/GSAP-163D4F?style=for-the-badge&logo=greensock&logoColor=cyan)

---

## 📋 О проекте

Современный веб-сайт караоке-клуба с:
- 🎤 Интерактивной галереей и фотоотчетами
- 🍽️ Меню ресторана и бара
- 🎨 Уникальным дизайном и анимациями
- 🌍 Поддержкой двух языков (RU/EN)
- 📱 Адаптивной версткой для всех устройств
- 🖼️ Виртуальным 360° туром по залу

### Технологический стек:

**Frontend:**
- HTML5, CSS3 (SCSS)
- JavaScript (ES6+)
- jQuery 3.6.3
- GSAP (анимации)
- Swiper.js (слайдеры)
- Three.js + Panolens (360° панорама)

**Build Tools:**
- Webpack 5
- Babel
- Sass
- imagemin (оптимизация изображений)

**Оптимизации:**
- WebP с MD5-кэшированием
- Lazy loading изображений
- Code splitting
- Минификация CSS/JS
- Preload критичных ресурсов

---

## 🚀 Быстрый старт

### Требования:
- Node.js 16+ 
- npm 8+

### Установка:

```bash
# Клонировать репозиторий
git clone https://github.com/alexeevivan/jelsa.git
cd jelsa

# Установить зависимости
npm install
```

### Команды:

```bash
# Запустить dev-сервер (http://localhost:4300)
npm start

# Быстрая сборка (инкрементальная, ~25 сек)
npm run build

# Полная пересборка всех изображений (~10-15 мин)
npm run build:full

# Dev-сборка с watch
npm run watch

# Dev-сборка без watch
npm run dev
```

---

## 📁 Структура проекта

```
jelsa/
├── src/                          # Исходники
│   ├── index.html               # Главная страница
│   ├── gallery.html             # Галерея
│   ├── photo-report.html        # Список фотоотчетов
│   ├── photo-report/            # Страницы фотоотчетов
│   │   ├── party-*.html         # 27 фотоотчетов
│   ├── restaurant.html          # Меню ресторана
│   ├── restaurant/
│   │   └── special-offer.html   # Спецпредложения
│   ├── bar-list.html            # Барное меню
│   ├── contact.html             # Контакты
│   ├── faq.html                 # FAQ
│   ├── view-tour-1.html         # 360° тур
│   │
│   ├── js/                      # JavaScript
│   │   ├── index.js             # Главная страница (с jQuery)
│   │   ├── index-no-jquery.js   # Главная (без jQuery)
│   │   ├── gallery.js           # Галерея
│   │   ├── expanded.js          # Анимации GSAP
│   │   ├── circles.js           # Canvas анимация
│   │   ├── panoramic.js         # 360° панорама
│   │   ├── components/          # Компоненты
│   │   ├── translations/        # Переводы RU/EN
│   │   ├── webp-optimized.mjs   # WebP с кэшированием
│   │   └── replace-webp.js      # Замена путей на .webp
│   │
│   ├── styles/                  # SCSS стили
│   │   ├── main.scss            # Главные стили
│   │   ├── _header.scss         # Хедер
│   │   ├── _footer.scss         # Футер
│   │   ├── _gallery.scss        # Галерея
│   │   ├── responsive/          # Адаптивные стили
│   │   └── components/          # Компоненты
│   │
│   ├── assets/                  # Ассеты
│   │   ├── content/             # Изображения
│   │   │   ├── party/           # Фото вечеринок (1595 файлов)
│   │   │   ├── banner/          # Баннеры
│   │   │   ├── Interior/        # Интерьер
│   │   │   └── menu/            # Меню
│   │   ├── fonts/               # Шрифты
│   │   └── svg/                 # SVG иконки
│   │
│   └── html/includes/           # HTML-инклюды
│
├── dist/                        # Собранный проект
├── webpack.config.js            # Конфигурация Webpack
├── webpack.pages.js             # Конфигурация страниц
├── .webp-cache.json             # Кэш WebP-конвертации
└── package.json                 # Зависимости

```

---

## 🎨 Основные возможности

### 1. Модальное окно на главной странице

Для изменения модального окна с акцией:

**Файлы**: `src/styles/main.scss`, `src/styles/responsive/main-responsive.scss`

```scss
.modal-ny {
  display: flex;  // flex = показать, none = скрыть
}
```

**HTML**: `src/index.html`

```html
<div class="modal-ny__wallpaper">
  <div class="banner">
    <img src="assets/content/banner/spring.webp" 
         class="banner__wallpaper" 
         alt="Jelsa's Spring time">
  </div>
</div>

<div class="modal-ny__proposal">
  <h2>Spring time in Jel'sa</h2>
  <ul>
    <li id="modal-head-date">Всю весну</li>
    <li id="modal-head-line">Специальная программа</li>
    <li id="modal-head-set">DJ-сеты</li>
  </ul>
</div>
```

### 2. Добавление нового фотоотчета

1. Создай HTML-файл в `src/photo-report/party-new-event.html`
2. Добавь фотографии в `src/assets/content/party/party_new_event/`
3. Добавь страницу в `webpack.pages.js`:

```js
'photo-report/party-new-event.html': {
  chunks: ['main', 'partyPage', 'galleryImgLightbox', 'langSwapAlbumReport'],
},
```

4. Запусти `npm run build`

### 3. Переключение языка

Файлы переводов: `src/js/translations/lang-swap-*.js`

Добавление нового перевода:
```js
const translations = {
  ru: {
    'element-id': 'Текст на русском',
  },
  en: {
    'element-id': 'Text in English',
  },
};
```

---

## ⚡ Оптимизации

### WebP с кэшированием

Проект использует автоматическую конвертацию изображений в WebP с MD5-кэшированием:

- **Первая сборка**: ~10-15 минут (конвертирует все 1595 изображений)
- **Последующие сборки**: ~25 секунд (только измененные файлы)
- **Сжатие**: 5.8 GB → 1 GB (в 5.8 раз!)

**Как это работает:**
1. `webp-optimized.mjs` вычисляет MD5-хэш каждого изображения
2. Сравнивает с кэшем в `.webp-cache.json`
3. Конвертирует только новые/измененные файлы
4. Обновляет кэш

### Производительность

- ✅ Lazy loading изображений
- ✅ Preload критичных ресурсов
- ✅ Preconnect к CDN
- ✅ Code splitting по страницам
- ✅ Минификация CSS/JS
- ✅ Оптимизация изображений

---

## 🛠️ Разработка

### Добавление новой страницы:

1. Создай HTML в `src/new-page.html`
2. Создай JS в `src/js/new-page.js`
3. Добавь entry point в `webpack.config.js`:
```js
entry: {
  newPage: {
    import: "./js/new-page.js"
  },
}
```
4. Добавь страницу в `webpack.pages.js`:
```js
'new-page.html': {
  chunks: ['main', 'newPage'],
},
```

### Работа с SCSS:

Импорт стилей в JS:
```js
import "@styles/main.scss";
import "@styles/_header.scss";
```

Использование переменных:
```scss
:root {
  --main-color: #04070F;
  --creamy: #D2D4D7;
  --cyan: #17fffb;
}
```

### Анимации GSAP:

```js
gsap.fromTo(".element", 
  { opacity: 0, x: -50 }, 
  {
    opacity: 1, 
    x: 0,
    scrollTrigger: {
      trigger: ".element",
      start: '-850',
      end: '-100',
      scrub: true
    }
  }
);
```

---

## 📊 Метрики проекта

**Размер:**
- Изображения: 1 GB (после WebP)
- JS бандлы: ~580 KB
- CSS: ~734 KB
- Всего страниц: 38

**Производительность:**
- Время сборки: ~25 секунд (инкрементальная)
- Время первой загрузки: ~2-3 секунды
- PageSpeed Score: 85-90

**Код:**
- JavaScript: ~15,000 строк
- SCSS: ~8,000 строк
- HTML: ~5,000 строк

---

## 📝 Документация

- `OPTIMIZATION_GUIDE.md` — полное руководство по оптимизации
- `QUICK_SUMMARY.md` — краткое резюме оптимизаций
- `CHECKLIST.md` — чеклист действий
- `CHANGES.md` — список изменений

---

## 🐛 Известные проблемы

- jQuery используется в 6 файлах (можно заменить на vanilla JS)
- 125 уязвимостей в зависимостях (в основном dev-dependencies)
- Three.js v105 (2019) — можно обновить

Запустите `npm audit fix` для исправления некритичных уязвимостей.

---

## 🤝 Контрибьюция

1. Fork проекта
2. Создай feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Открой Pull Request

---

## 📄 Лицензия

ISC License

---

## 👤 Автор

**Ivan Alexeev**
- Email: alexeevivan92@gmail.com
- GitHub: [@alexeevivan](https://github.com/alexeevivan)
- Website: [alexeevivan.github.io/CV-Bar](https://alexeevivan.github.io/CV-Bar/)

---

## 🏢 О клубе

**Jel'sa Karaoke Club**
- 📍 Адрес: Республика Беларусь, Минск, Немига 5
- 📞 Телефон: +375 44 5-201-201
- 🌐 Сайт: [jelsa.by](https://jelsa.by)

**Особенности:**
- Профессиональный звук HK Audio
- Караоке-система AST
- Вместимость: 90 мест
- Вход свободный
- Европейская и японская кухня
- Signature коктейли

---

## 🎯 Roadmap

- [ ] Заменить jQuery на vanilla JS
- [ ] Обновить Three.js до последней версии
- [ ] Добавить TypeScript
- [ ] Улучшить SEO (alt, aria-label)
- [ ] Добавить тесты (Jest)
- [ ] Настроить CI/CD
- [ ] Добавить PWA поддержку

---

**Последнее обновление**: 2026-04-14  
**Версия**: 1.0.0
