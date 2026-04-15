# Jelsa.by - Чеклист после оптимизации

## ✅ Сделано сегодня (2026-04-14)

- [x] Создан `webp-optimized.mjs` с кэшированием
- [x] Обновлен `package.json` с новыми командами
- [x] Добавлен `.webp-cache.json` в `.gitignore`
- [x] Создан `index-no-jquery.js` (альтернатива без jQuery)
- [x] Написана документация (`OPTIMIZATION_GUIDE.md`, `QUICK_SUMMARY.md`)

## 🔄 В процессе

- [ ] Первая WebP-конвертация (~37% завершено, еще ~10 минут)

## 📋 Что сделать после завершения конвертации

### 1. Протестировать быструю пересборку
```bash
# Измени любой файл в src/
npm run build
# Должно занять 10-30 секунд вместо 5 минут!
```

### 2. Проверить кэш
```bash
ls -lh .webp-cache.json
# Должен быть создан
```

### 3. Тест с новым изображением
```bash
# Добавь 1 новое фото в src/assets/content/party/
npm run build
# Должно сконвертировать только новое фото
```

## 🔴 Критичные исправления (приоритет 1)

### 1. Удалить Three.js с главной страницы
**Файл**: `src/index.html`
```html
<!-- Удалить эти строки (52-53): -->
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/105/three.js"></script>
<script src="//cdn.jsdelivr.net/npm/panolens@0.11.0/build/panolens.min.js"></script>
```
**Переместить в**: `src/view-tour-1.html`

### 2. Настроить или удалить Google Analytics
**Файл**: `src/index.html` (строки 32, 38)
```html
<!-- Вариант 1: Заменить на реальный ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Вариант 2: Удалить весь блок, если аналитика не нужна -->
```

### 3. Удалить console.log
**Файл**: `src/js/expanded.js:128`
```js
// Удалить эту строку:
console.log(textArray[i]);
```

### 4. Включить кэширование
**Файл**: `src/index.html` (строки 26-28)
```html
<!-- Удалить эти строки: -->
<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="expires" content="0" />
```

## 🟡 Важные улучшения (приоритет 2)

### 5. Обновить зависимости
```bash
npx update-browserslist-db@latest
npm update
npm uninstall node-sass
npm install --save-dev sass
```

### 6. Использовать версию без jQuery
**Файл**: `webpack.config.js:35-37`
```js
main: {
  import: "./js/index-no-jquery.js",  // было: "./js/index.js"
},
```

Затем:
```bash
npm uninstall jquery
npm run build
```

### 7. Сжать изображения через sharp
```bash
npm install --save-dev sharp
# Обновить webp-optimized.mjs для использования sharp
```

## 📊 Ожидаемые результаты

### До оптимизации:
- Время сборки: **~5 минут**
- Размер изображений: **3.6-5.2 MB**
- Размер бандла: **~630KB** (с jQuery)

### После всех оптимизаций:
- Время сборки: **10-30 секунд** ✅
- Размер изображений: **300-800KB** (уже лучше!)
- Размер бандла: **~600KB** (без jQuery)

## 🎯 Команды

```bash
# Быстрая сборка (инкрементальная)
npm run build

# Полная пересборка всех изображений
npm run build:full

# Dev-сервер
npm start

# Проверка размера бандлов
ls -lh dist/assets/js/*.bundle.js
```

## 📖 Документация

- `OPTIMIZATION_GUIDE.md` — полное руководство
- `QUICK_SUMMARY.md` — краткое резюме
- Этот файл — чеклист действий

---

**Статус**: Первая конвертация в процессе (~37%)  
**Обновлено**: 2026-04-14 19:13
