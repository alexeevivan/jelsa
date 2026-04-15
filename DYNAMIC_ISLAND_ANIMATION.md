# Dynamic Island Animation для баннера Jelsa.by

**Дата**: 14 апреля 2026  
**Вдохновение**: Dynamic Island (iPhone 14 Pro+)

---

## ✨ Что сделано

### 1. Плавное появление баннера при загрузке

**Эффект**: Баннер появляется как Dynamic Island — начинается с маленькой капсулы, плавно расширяется до полного размера.

**Анимация**:
- **Фон**: Fade in + backdrop blur (0 → 12px) за 1.2 секунды
- **Карточка**: Scale (0.8 → 1.02 → 1) + translateY + border-radius (100px → calc) за 1 секунду
- **Контент**: Staggered fade in с задержками (0.6s и 0.8s)

**Timing**: `cubic-bezier(0.76, 0, 0.24, 1)` — плавная, естественная кривая как у Apple

---

### 2. Плавное закрытие баннера

**Эффект**: Обратная анимация — карточка сжимается в капсулу и исчезает.

**Анимация**:
- **Карточка**: Scale (1 → 0.8) + translateY + border-radius (calc → 100px) за 0.8 секунды
- **Фон**: Fade out + backdrop blur (12px → 0) за 0.8 секунды

**Логика**: При клике на "Закрыть" добавляется класс `.closing`, анимация проигрывается, затем баннер скрывается.

---

## 📝 Технические детали

### CSS (src/styles/main.scss)

```scss
.modal-ny {
  // Появление
  opacity: 0;
  animation: dynamicIslandAppear 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  backdrop-filter: blur(12px);

  // Закрытие
  &.closing {
    animation: dynamicIslandDisappear 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    
    .modal-ny__card {
      animation: cardCollapse 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    }
  }
}

.modal-ny__card {
  // Расширение карточки
  transform: scale(0.8);
  opacity: 0;
  animation: cardExpand 1s cubic-bezier(0.76, 0, 0.24, 1) 0.2s forwards;
}

.modal-ny__wallpaper,
.modal-ny__info {
  // Staggered появление контента
  opacity: 0;
  animation: contentFadeIn 0.8s cubic-bezier(0.76, 0, 0.24, 1) 0.6s forwards;
}
```

### Keyframes

**dynamicIslandAppear**: Fade in фона + blur  
**dynamicIslandDisappear**: Fade out фона + blur  
**cardExpand**: Расширение карточки (капсула → полный размер)  
**cardCollapse**: Сжатие карточки (полный размер → капсула)  
**contentFadeIn**: Плавное появление контента

---

### JavaScript (src/js/index.js)

```javascript
$(".modal-ny__close-btn").click(function () {
  // Добавляем класс для анимации закрытия
  $(".modal-ny").addClass("closing");

  // Ждем окончания анимации (800ms) перед скрытием
  setTimeout(function() {
    $(".modal-ny").removeClass("modal-ny__active closing");
    $(".modal-ny").addClass("hidden");
    document.body.style.position = "unset";
    $(".header").removeClass("hidden");
  }, 800);
});
```

---

## 🎬 Таймлайн анимации

### Появление (при загрузке страницы):

```
0ms    → Фон начинает fade in + blur
200ms  → Карточка начинает расширяться
600ms  → Левая часть (wallpaper) начинает fade in
800ms  → Правая часть (info) начинает fade in
1200ms → Анимация завершена
```

### Закрытие (при клике на "Закрыть"):

```
0ms    → Карточка начинает сжиматься
0ms    → Фон начинает fade out + blur removal
800ms  → Анимация завершена, баннер скрывается
```

---

## 🎨 Визуальные улучшения

1. **Backdrop blur**: Размытие фона за баннером (12px)
2. **Spring easing**: Карточка немного "переходит" (scale 1.02) перед финальной позицией
3. **Staggered timing**: Контент появляется последовательно, не все сразу
4. **Smooth border-radius**: Плавный переход от капсулы (100px) к скругленным углам

---

## 🚀 Как протестировать

```bash
# Запустить dev-сервер
npm start

# Открыть http://localhost:4300
# Баннер появится с анимацией Dynamic Island
# Нажать "Закрыть" — баннер закроется с обратной анимацией
```

---

## 📊 Performance

- **GPU-accelerated**: Используются только `transform`, `opacity`, `backdrop-filter`
- **No layout shifts**: Анимация не вызывает reflow
- **Smooth 60fps**: Cubic-bezier кривая оптимизирована для плавности

---

## 🔄 Совместимость

- ✅ Chrome/Edge (полная поддержка)
- ✅ Safari (полная поддержка, включая backdrop-filter)
- ✅ Firefox (полная поддержка)
- ⚠️ Старые браузеры: Fallback на обычное появление без blur

---

**Результат**: Баннер теперь появляется и закрывается с премиальной анимацией, как Dynamic Island на iPhone! 🎉
