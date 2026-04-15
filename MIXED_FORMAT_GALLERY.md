# Mixed Format Gallery — Инструкция по использованию

**Дата**: 14 апреля 2026  
**Назначение**: Адаптивная сетка для фотоотчетов с portrait и landscape фотографиями

---

## 🎯 Что это решает

### Проблема:
- Текущая сетка: 3x3 (9 фото) только для landscape
- Нельзя использовать portrait фотографии
- Все фото должны быть одного формата

### Решение:
- Адаптивная CSS Grid сетка
- Поддержка portrait, landscape и square форматов
- Автоматическая подстройка под разные экраны
- Не ломает существующие фотоотчеты

---

## 📱 Количество фото на слайде

| Устройство | Сетка | Фото на слайд |
|------------|-------|---------------|
| **Desktop** (992px+) | 3 колонки | 6 фото |
| **Tablet** (768-991px) | 2 колонки | 4 фото |
| **Mobile** (<768px) | 1 колонка | 2 фото |

---

## 🚀 Как использовать

### Шаг 1: Добавить класс `mixed-format`

В HTML файле добавь класс к `gallery-slide`:

```html
<!-- Было -->
<div class="swiper-slide gallery-slide">
  <!-- 9 фото -->
</div>

<!-- Стало -->
<div class="swiper-slide gallery-slide mixed-format">
  <!-- 6 фото для desktop -->
</div>
```

---

### Шаг 2: Добавить классы к изображениям

Каждому изображению добавь класс в зависимости от ориентации:

```html
<!-- Portrait (вертикальное) -->
<a href="..." target="_blank" data-action="lightbox-open">
  <img data-src="..." 
       class="gallery__photo gallery-image lazyload portrait" 
       loading="lazy" alt="...">
</a>

<!-- Landscape (горизонтальное) -->
<a href="..." target="_blank" data-action="lightbox-open">
  <img data-src="..." 
       class="gallery__photo gallery-image lazyload landscape" 
       loading="lazy" alt="...">
</a>

<!-- Square (квадратное) -->
<a href="..." target="_blank" data-action="lightbox-open">
  <img data-src="..." 
       class="gallery__photo gallery-image lazyload square" 
       loading="lazy" alt="...">
</a>

<!-- Hero (большое горизонтальное, занимает 2 колонки) -->
<a href="..." target="_blank" data-action="lightbox-open">
  <img data-src="..." 
       class="gallery__photo gallery-image lazyload landscape hero" 
       loading="lazy" alt="...">
</a>
```

---

## 📐 Примеры компоновки

### Desktop (6 фото на слайд):

#### Вариант 1: 2 portrait + 4 landscape
```
┌─────────┬─────────┬─────────┐
│         │ Land 1  │ Land 2  │
│ Port 1  ├─────────┼─────────┤
│         │ Land 3  │ Land 4  │
├─────────┼─────────┴─────────┤
│         │                   │
│ Port 2  │   Hero (Land 5)   │
│         │                   │
└─────────┴───────────────────┘
```

#### Вариант 2: 4 portrait + 2 landscape
```
┌─────────┬─────────┬─────────┐
│         │         │ Land 1  │
│ Port 1  │ Port 2  ├─────────┤
│         │         │ Land 2  │
├─────────┼─────────┼─────────┤
│         │         │         │
│ Port 3  │ Port 4  │         │
│         │         │         │
└─────────┴─────────┴─────────┘
```

#### Вариант 3: Все landscape
```
┌─────────┬─────────┬─────────┐
│ Land 1  │ Land 2  │ Land 3  │
├─────────┼─────────┼─────────┤
│ Land 4  │ Land 5  │ Land 6  │
└─────────┴─────────┴─────────┘
```

---

### Tablet (4 фото на слайд):

```
┌─────────┬─────────┐
│         │ Land 1  │
│ Port 1  ├─────────┤
│         │ Land 2  │
├─────────┼─────────┤
│         │ Land 3  │
│ Port 2  ├─────────┘
│         │
└─────────┘
```

---

### Mobile (2 фото на слайд):

```
┌───────────────┐
│               │
│   Portrait    │
│               │
├───────────────┤
│  Landscape    │
└───────────────┘
```

---

## 💡 Полный пример HTML

```html
<div class="gallery">
  <div class="gallery__container">
    <div class="gallery__space"></div>
    <div class="gallery__item gallery-slider">
      <div class="swiper-container gallery-container">
        <div class="swiper-wrapper gallery-wrapper">
          
          <!-- Слайд 1: Mixed format -->
          <div class="swiper-slide gallery-slide mixed-format">
            
            <!-- Portrait 1 -->
            <a href="../../assets/content/party/my_party/photo_001.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_001.jpg"
                   class="gallery__photo gallery-image lazyload portrait" 
                   loading="lazy" alt="Party photo">
            </a>
            
            <!-- Landscape 1 -->
            <a href="../../assets/content/party/my_party/photo_002.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_002.jpg"
                   class="gallery__photo gallery-image lazyload landscape" 
                   loading="lazy" alt="Party photo">
            </a>
            
            <!-- Landscape 2 -->
            <a href="../../assets/content/party/my_party/photo_003.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_003.jpg"
                   class="gallery__photo gallery-image lazyload landscape" 
                   loading="lazy" alt="Party photo">
            </a>
            
            <!-- Portrait 2 -->
            <a href="../../assets/content/party/my_party/photo_004.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_004.jpg"
                   class="gallery__photo gallery-image lazyload portrait" 
                   loading="lazy" alt="Party photo">
            </a>
            
            <!-- Landscape 3 -->
            <a href="../../assets/content/party/my_party/photo_005.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_005.jpg"
                   class="gallery__photo gallery-image lazyload landscape" 
                   loading="lazy" alt="Party photo">
            </a>
            
            <!-- Hero (большое горизонтальное) -->
            <a href="../../assets/content/party/my_party/photo_006.jpg" 
               target="_blank" data-action="lightbox-open">
              <img data-src="../../assets/content/party/my_party/photo_006.jpg"
                   class="gallery__photo gallery-image lazyload landscape hero" 
                   loading="lazy" alt="Party photo">
            </a>
            
          </div>
          
          <!-- Слайд 2: Обычный формат (без mixed-format) -->
          <div class="swiper-slide gallery-slide">
            <!-- 9 landscape фото как обычно -->
          </div>
          
        </div>
        
        <!-- Навигация -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</div>
```

---

## ✅ Преимущества

1. **Не ломает существующие фотоотчеты** — работает только с классом `mixed-format`
2. **Адаптивная сетка** — автоматически подстраивается под экран
3. **Поддержка всех форматов** — portrait, landscape, square, hero
4. **CSS Grid** — современная, гибкая технология
5. **Сохраняет все эффекты** — grayscale, hover, lightbox

---

## 🎨 Кастомизация

### Изменить количество колонок на desktop:

```scss
@media only screen and (min-width: 992px) {
  .gallery-slide.mixed-format {
    grid-template-columns: repeat(4, 1fr); // Было 3, стало 4
  }
}
```

### Изменить gap между фото:

```scss
.gallery-slide.mixed-format {
  gap: 24px; // Было 20px
}
```

### Изменить максимальную высоту portrait:

```scss
.gallery__photo.portrait {
  max-height: 700px; // Было 600px
}
```

---

## 🔧 Troubleshooting

### Проблема: Фото не выстраиваются в сетку
**Решение**: Проверь, что добавлен класс `mixed-format` к `gallery-slide`

### Проблема: Portrait фото слишком большие
**Решение**: Добавь `max-height` в стилях или используй класс `square` вместо `portrait`

### Проблема: На mobile слишком много фото
**Решение**: Уменьши количество фото на слайде до 2-3 для mobile

---

## 📊 Сравнение

| Параметр | Старая сетка | Mixed format |
|----------|--------------|--------------|
| **Форматы** | Только landscape | Portrait + Landscape + Square |
| **Фото на слайд (desktop)** | 9 | 6 |
| **Фото на слайд (mobile)** | 3 | 2 |
| **Гибкость** | Низкая | Высокая |
| **Адаптивность** | Средняя | Отличная |

---

## 🚀 Быстрый старт

1. Добавь класс `mixed-format` к слайду
2. Добавь классы `portrait`/`landscape`/`square` к изображениям
3. Используй 6 фото на слайд для desktop
4. Готово! 🎉

---

**Файлы**:
- Стили: `src/styles/_mixed-format-gallery.scss`
- Импорт: `src/js/photo-report.js`

**Автор**: Claude Code  
**Дата**: 2026-04-14
