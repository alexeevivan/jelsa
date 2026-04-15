# Jelsa.by — План оптимизации (Апрель 2026)

## 🔴 Критично (сделать сейчас)

### 1. Сжать изображения (5.52 GB → ~500 MB)
**Проблема**: Изображения в `party/` весят 3-9 MB каждое, всего 5.52 GB

**Решение**:
```bash
# Установить sharp
npm install --save-dev sharp

# Сжать все изображения
node src/js/compress-images.mjs

# Или конкретную папку
node src/js/compress-images.mjs ./src/assets/content/Interior
```

**Результат**: Изображения уменьшатся до 300-800 KB (экономия ~90%)

---

### 2. Дублирование путей в webpack
**Проблема**: `assets/content/assets/content/` — двойная вложенность

**Файл**: `webpack.config.js:109`

Заменить:
```js
assetModuleFilename: "assets/content/[path][name][ext]",
```

На:
```js
assetModuleFilename: "assets/[path][name][ext]",
```

И в CopyWebpackPlugin (строка 151):
```js
{
  from: path.resolve(__dirname, "src/assets/"),
  to: path.resolve(__dirname, "dist/assets"),
  noErrorOnMissing: true
}
```

---

### 3. Удалить Three.js с главной страницы
**Файл**: `src/index.html:52-53`

Переместить эти строки в `src/view-tour-1.html`:
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/105/three.js"></script>
<script src="//cdn.jsdelivr.net/npm/panolens@0.11.0/build/panolens.min.js"></script>
```

**Экономия**: ~200 KB на главной странице

---

### 4. Включить кэширование браузера
**Файл**: `src/index.html:26-28`

Удалить эти строки:
```html
<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
```

Повторить для всех HTML-файлов в `src/`

---

## 🟡 Важно (на этой неделе)

### 5. Заменить jQuery на vanilla JS
**Файл**: `webpack.config.js:53`

```js
main: {
  import: "./js/index-no-jquery.js",  // было: "./js/index.js"
},
```

Затем обновить остальные файлы:
- `gallery.js` → `gallery-no-jquery.js`
- `expanded.js` → `expanded-no-jquery.js`
- `faq.js` → `faq-no-jquery.js`

**Экономия**: ~30 KB на каждой странице

---

### 6. Настроить Google Analytics
**Файл**: `src/index.html:32,38`

Заменить `GA_TRACKING_ID` на реальный ID или удалить, если не используется.

---

### 7. Удалить console.log
**Файл**: `src/js/expanded.js:128`

```js
console.log(textArray[i]); // Удалить эту строку
```

Проверить другие файлы:
```bash
grep -r "console.log" src/js/ --exclude-dir=node_modules
```

---

### 8. Оптимизировать webpack splitChunks
**Файл**: `webpack.config.js:31-34`

Заменить:
```js
splitChunks: {
  chunks: "initial",
}
```

На:
```js
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
}
```

---

## 🟢 Улучшения (следующий спринт)

### 9. Обновить зависимости
```bash
npm outdated
npm update

# Проверить критичные уязвимости
npm audit fix
```

---

### 10. Добавить preload для критичных ресурсов
**Файл**: `src/index.html` (в `<head>`)

```html
<link rel="preload" as="font" href="assets/fonts/Raleway.woff2" crossorigin>
<link rel="preload" as="image" href="assets/content/jelsa-singer.webp">
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
```

---

### 11. Lazy loading для изображений
Добавить `loading="lazy"` для всех изображений ниже первого экрана:

```html
<img src="..." alt="..." loading="lazy">
```

---

### 12. Оптимизировать SVG
**Файл**: `assets/svg/wings.svg` (253 KB)

```bash
npm install -g svgo
svgo src/assets/svg/wings.svg -o src/assets/svg/wings-optimized.svg
```

---

## 📊 Ожидаемые результаты

| Метрика | До | После | Улучшение |
|---------|-----|-------|-----------|
| Размер изображений | 5.52 GB | ~500 MB | -90% |
| Время загрузки главной | ~8-12 сек | ~2-3 сек | -70% |
| Размер JS бандлов | 609 KB | ~400 KB | -35% |
| Время сборки | ~5 мин | ~30 сек | -90% |
| PageSpeed Score | ~40-50 | ~80-90 | +80% |

---

## 🚀 Быстрый старт

```bash
# 1. Установить sharp
npm install --save-dev sharp

# 2. Сжать изображения
node src/js/compress-images.mjs

# 3. Пересобрать проект
npm run build

# 4. Проверить размер
du -sh dist/
```

---

## 📝 Чеклист

- [ ] Сжать изображения через sharp
- [ ] Исправить дублирование путей в webpack
- [ ] Переместить Three.js в view-tour-1.html
- [ ] Включить кэширование браузера
- [ ] Заменить jQuery на vanilla JS
- [ ] Настроить/удалить Google Analytics
- [ ] Удалить console.log
- [ ] Оптимизировать webpack splitChunks
- [ ] Обновить зависимости
- [ ] Добавить preload для шрифтов
- [ ] Добавить lazy loading для изображений
- [ ] Оптимизировать SVG

---

**Создано**: 2026-04-14  
**Автор**: Claude Code
