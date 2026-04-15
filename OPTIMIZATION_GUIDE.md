# Jelsa.by - Руководство по оптимизации

## Что уже сделано

### 1. ✅ Кэширование WebP-конвертации
**Проблема**: Каждая сборка пересжимала все изображения (~5 минут)
**Решение**: Создан `webp-optimized.mjs` с MD5-кэшированием

**Использование**:
```bash
npm run build        # Быстрая сборка (только измененные картинки)
npm run build:full   # Полная пересборка всех изображений
```

**Как работает**:
- Создается `.webp-cache.json` с хэшами файлов
- При повторной сборке конвертируются только новые/измененные изображения
- Кэш-файл добавлен в `.gitignore`

### 2. ✅ Версия без jQuery
Создан `index-no-jquery.js` — замена jQuery на vanilla JS

**Экономия**: ~30KB в бандле

**Чтобы использовать**:
1. В `webpack.config.js` замени:
```js
main: {
  import: "./js/index-no-jquery.js",  // было: "./js/index.js"
},
```
2. Удали jQuery из dependencies в `package.json`
3. Повтори для других файлов: `gallery.js`, `expanded.js`, `faq.js`, `bar-list.js`

---

## Критичные проблемы (требуют исправления)

### 🔴 1. Огромные изображения (3.6-5.2 MB)
**Файлы**: `dist/assets/content/party/**/*.webp`

**Решение**:
```bash
# Установи sharp для лучшего сжатия
npm install --save-dev sharp

# Обнови webp-optimized.mjs, замени imagemin-webp на sharp:
import sharp from 'sharp';

// Вместо imagemin.buffer():
await sharp(file)
  .resize(1920, null, { withoutEnlargement: true })
  .webp({ quality: 75, effort: 6 })
  .toFile(targetPath);
```

**Ожидаемый результат**: 5MB → 300-500KB

### 🔴 2. Google Analytics не работает
**Файл**: `src/index.html:32,38`

```html
<!-- Заменить GA_TRACKING_ID на реальный -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Или удалить, если аналитика не нужна.

### 🔴 3. Three.js загружается на всех страницах
**Файл**: `src/index.html:52-53`

```html
<!-- Эти скрипты нужны только для view-tour-1.html -->
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/105/three.js"></script>
<script src="//cdn.jsdelivr.net/npm/panolens@0.11.0/build/panolens.min.js"></script>
```

**Решение**: Переместить в `view-tour-1.html`

### 🔴 4. Console.log в продакшене
**Файл**: `src/js/expanded.js:128`

```js
console.log(textArray[i]); // Удалить
```

### 🔴 5. Кэширование отключено
**Файл**: `src/index.html:26-28`

```html
<!-- Удалить эти строки -->
<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
```

---

## Рекомендуемые улучшения

### 🟡 6. Обновить зависимости
```bash
npm outdated
npm update

# Заменить устаревшие:
npm uninstall node-sass
npm install --save-dev sass
```

### 🟡 7. Удалить ненужные полифиллы
**Файл**: `webpack.config.js:105-118`

```js
// Удалить fallback для crypto, buffer, zlib, etc
// Они не нужны для фронтенда караоке-клуба
fallback: {
  "fs": false,
  "tls": false,
  "net": false,
  // ... остальное удалить
}
```

### 🟡 8. Автоматизировать HTMLWebpackPlugin
**Файл**: `webpack.config.js:128-513`

Вместо 30+ копий плагина:

```js
const glob = require('glob');
const pages = glob.sync('src/**/*.html');

const htmlPlugins = pages.map(page => {
  const filename = path.relative('src', page);
  return new HTMLWebpackPlugin({
    filename,
    template: page,
    minify: { collapseWhitespace: isProd },
    chunks: getChunksForPage(filename), // функция определения чанков
  });
});

// В plugins:
...htmlPlugins,
```

### 🟡 9. Оптимизировать загрузку скриптов
**Проблема**: 11 JS-файлов на главной странице

**Решение**: Code splitting по роутам
```js
// webpack.config.js
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10,
      },
      common: {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
},
```

### 🟡 10. Добавить preload для критичных ресурсов
**Файл**: `src/index.html`

```html
<head>
  <!-- После meta-тегов -->
  <link rel="preload" as="font" href="assets/fonts/Raleway.woff2" crossorigin>
  <link rel="preload" as="image" href="assets/content/jelsa-singer.webp">
</head>
```

---

## Дополнительные улучшения

### 11. SEO
- Добавить `alt` для всех `<img>` (некоторые пустые)
- Добавить `<meta name="description">` на каждую страницу
- Проверить `sitemap.xml` на актуальность

### 12. Accessibility
- Кнопки без текста нужны `aria-label`
- Проверить контрастность цветов (WCAG AA)
- Добавить `lang` атрибуты для переключения языка

### 13. Performance
- Включить HTTP/2 на сервере
- Добавить `preconnect` для CDN:
```html
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
```

### 14. Безопасность
- Удалить закомментированные токены Telegram из кода
- Добавить CSP (Content Security Policy)
- Проверить HTTPS на всех ресурсах

---

## Метрики до/после оптимизации

### Текущее состояние:
- **Время сборки**: ~5 минут (каждый раз)
- **Размер главной страницы**: ~500KB HTML + 11 JS-файлов
- **Размер изображений**: 3.6-5.2 MB каждое
- **jQuery**: ~30KB в каждом бандле

### После оптимизации:
- **Время сборки**: ~10-30 секунд (инкрементальная)
- **Размер главной страницы**: ~300KB (без jQuery)
- **Размер изображений**: 300-500KB (с sharp)
- **jQuery**: удален

---

## Приоритет внедрения

1. **Сейчас** (критично):
   - ✅ Кэширование WebP (уже сделано)
   - Сжатие изображений через sharp
   - Удалить Three.js с главной

2. **На этой неделе**:
   - Заменить jQuery на vanilla JS
   - Настроить/удалить Google Analytics
   - Удалить console.log
   - Включить кэширование

3. **В следующем спринте**:
   - Обновить зависимости
   - Автоматизировать HTMLWebpackPlugin
   - Оптимизировать code splitting

---

## Команды для быстрого старта

```bash
# Быстрая сборка (только измененные файлы)
npm run build

# Полная пересборка
npm run build:full

# Dev-сервер
npm start

# Проверка размера бандлов
npm run build && ls -lh dist/assets/js/*.bundle.js

# Анализ бандлов (если установлен webpack-bundle-analyzer)
npm run build -- --analyze
```

---

**Автор оптимизаций**: Claude Code  
**Дата**: 2026-04-14
