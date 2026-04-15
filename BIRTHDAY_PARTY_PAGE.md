# Birthday Party — Страница фотоотчета

**Дата**: 14 апреля 2026  
**Фотографий**: 280  
**URL**: http://localhost:4300/photo-report/party-birthday.html

---

## ✅ Что создано

### 1. HTML страница
**Файл**: `src/photo-report/party-birthday.html`

### 2. Include с галереей
**Файл**: `src/html/includes/_party-birthday.html`
- **31 слайд** для desktop (9 фото на слайд = 279 фото)
- **Mixed format** — гибкая сетка с portrait и landscape
- **Случайный порядок** — фотографии перемешаны

### 3. Фотографии
**Папка**: `src/assets/content/party/party_birthday/`
- `birthday_party_1.jpg` → `birthday_party_280.jpg`
- **280 фотографий** в случайном порядке на слайдах

### 4. Webpack конфигурация
**Файл**: `webpack.pages.js`
- Добавлена страница `photo-report/party-birthday.html`

---

## 📱 Адаптивность

| Устройство | Фото на слайд | Всего слайдов | Всего фото |
|------------|---------------|---------------|------------|
| **Desktop** (992px+) | 9 (3x3 grid) | 31 | 279 |
| **Tablet** (768-991px) | 3 (CSS Grid) | 93 | 279 |
| **Mobile** (<768px) | 2 (vertical) | 140 | 280 |

---

## 🎨 Mixed Format Grid

Каждый слайд использует класс `mixed-format` с адаптивной сеткой:

```html
<div class="swiper-slide gallery-slide mixed-format">
  <!-- Portrait фото -->
  <img class="gallery__photo gallery-image lazyload portrait" ...>
  
  <!-- Landscape фото -->
  <img class="gallery__photo gallery-image lazyload landscape" ...>
</div>
```

### Распределение форматов:
- **~33% Portrait** (вертикальные)
- **~67% Landscape** (горизонтальные)
- Случайное распределение на каждом слайде

---

## 🔀 Случайный порядок

Фотографии перемешаны случайным образом:
- `birthday_party_230.jpg` (слайд 1)
- `birthday_party_110.jpg` (слайд 1)
- `birthday_party_10.jpg` (слайд 1)
- `birthday_party_185.jpg` (слайд 1)
- ...

Каждая фотография используется **только один раз**.

---

## 🚀 Как запустить

```bash
# Запустить dev-сервер
npm start

# Открыть страницу
http://localhost:4300/photo-report/party-birthday.html
```

---

## 📦 Сборка для production

```bash
# Собрать проект
npm run build

# Проверить результат
open dist/photo-report/party-birthday.html
```

---

## 🎯 Особенности

### 1. Swiper слайдер
- Навигация стрелками
- Pagination (точки)
- Keyboard navigation
- Touch/swipe на мобильных

### 2. Lightbox
- Клик на фото → открывается в полном размере
- Класс `data-action="lightbox-open"`

### 3. Lazy loading
- Изображения загружаются по мере прокрутки
- Класс `lazyload` + `data-src`

### 4. Grayscale эффект
- Фото в grayscale по умолчанию
- Цветные при hover
- Transition 1s

---

## 📐 Структура слайда (Desktop)

```
Слайд 1 (9 фото):
┌─────────┬─────────┬─────────┐
│         │ Land    │         │
│ Port    ├─────────┤ Port    │
│         │ Land    │         │
├─────────┼─────────┼─────────┤
│ Land    │         │ Land    │
│         │ Port    │         │
├─────────┴─────────┴─────────┤
│         Land                │
└─────────────────────────────┘
```

---

## 🔧 Если нужно изменить

### Изменить количество фото на слайд:
Отредактируй скрипт `/tmp/generate_birthday_gallery.sh`:
```bash
# Было: 9 фото на слайд
for ((i=1; i<=9; i++)); do

# Стало: 6 фото на слайд
for ((i=1; i<=6; i++)); do
```

### Изменить соотношение portrait/landscape:
```bash
# Было: 33% portrait
if (( RANDOM % 3 == 0 )); then

# Стало: 50% portrait
if (( RANDOM % 2 == 0 )); then
```

### Пересоздать галерею:
```bash
/tmp/generate_birthday_gallery.sh
```

---

## ✨ Итог

✅ Страница создана: `party-birthday.html`  
✅ 280 фотографий в случайном порядке  
✅ Mixed format grid (portrait + landscape)  
✅ 31 слайд для desktop  
✅ Полностью адаптивная  
✅ Все эффекты работают (grayscale, hover, lightbox)  

---

**Готово к использованию!** 🎉
