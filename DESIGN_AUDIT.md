# Jelsa.by — Аудит дизайна и рекомендации по улучшению

**Дата**: 14 апреля 2026  
**Текущий стек**: Vanilla HTML + SCSS, Webpack, jQuery

---

## 🎨 Текущее состояние

### Сильные стороны:
✅ Уникальная цветовая палитра (темная тема с cyan акцентом)  
✅ Хорошая типографика (Raleway, SF Pro Display, декоративные шрифты)  
✅ Parallax эффекты (`data-speed`)  
✅ Lazy loading изображений  
✅ CSS переменные для консистентности  

### Проблемы:

---

## 🔴 Критические проблемы

### 1. Цвета

**Проблема**: Чистый черный фон `#04070F`
- Слишком контрастный, утомляет глаза
- Нет глубины и текстуры

**Решение**:
```scss
:root {
  --main-color: #0a0e1a; // Темно-синий вместо черного
  --main-color-lighter: #141824; // Для карточек/секций
}
```

---

**Проблема**: Oversaturated cyan `#17fffb`
- Слишком яркий, режет глаза
- Не сочетается с темной темой

**Решение**:
```scss
:root {
  --cyan: #4dd4d0; // Приглушенный cyan (saturation ~70%)
  --cyan-hover: #5ee5e1; // Для hover состояний
}
```

---

**Проблема**: Fuchsia `#ff0081` конфликтует с cyan
- Два ярких акцента создают визуальный шум

**Решение**: Оставить только cyan как основной акцент, fuchsia использовать только для специальных баннеров

---

### 2. Типографика

**Проблема**: Raleway везде
- Хороший шрифт, но нужно больше контраста

**Решение**: Добавить иерархию
```scss
body {
  font-family: "SF Pro Display", -apple-system, sans-serif; // Для body
}

h1, h2, h3 {
  font-family: "Raleway", sans-serif; // Для заголовков
  letter-spacing: -0.02em; // Tighter tracking для больших заголовков
}

.main-title__name {
  font-size: clamp(3rem, 8vw, 6rem); // Responsive размер
  line-height: 0.9; // Плотнее для display текста
}
```

---

**Проблема**: Нет font-weight вариаций
- Используется только Regular (400) и Light (300)

**Решение**: Добавить Medium (500) и SemiBold (600) для кнопок и подзаголовков

---

### 3. Layout

**Проблема**: Нет max-width контейнера
- Контент растягивается на всю ширину на больших экранах

**Решение**:
```scss
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

---

**Проблема**: Фиксированные размеры через `calc(var(--index) * N)`
- Хорошая идея, но может быть слишком большим на огромных экранах

**Решение**: Добавить clamp
```scss
:root {
  --index: clamp(0.8rem, 1vw + 1vh, 1.5rem); // Ограничить рост
}
```

---

### 4. Интерактивность

**Проблема**: Нет hover состояний на кнопках
- Кнопки выглядят статично

**Решение**:
```scss
.btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(77, 212, 208, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

---

**Проблема**: Нет focus states
- Плохо для accessibility

**Решение**:
```scss
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 4px;
  border-radius: 4px;
}
```

---

### 5. Shadows

**Проблема**: Generic box-shadow с черным цветом
```scss
-webkit-box-shadow: inset 0px 0px 1px 1px var(--creamy);
```

**Решение**: Tinted shadows
```scss
box-shadow: 
  0 4px 12px rgba(4, 7, 15, 0.5), // Темно-синий вместо черного
  0 2px 4px rgba(23, 255, 251, 0.1); // Легкий cyan glow
```

---

### 6. Текстура и глубина

**Проблема**: Плоский фон без текстуры
- Выглядит слишком цифрово

**Решение**: Добавить subtle noise
```scss
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.03"/></svg>');
  pointer-events: none;
  z-index: 1;
}
```

---

## 🟡 Улучшения среднего приоритета

### 7. Кнопки и CTA

**Текущее состояние**: Простые кнопки без визуального веса

**Решение**: Добавить gradient + glow
```scss
.btn-primary {
  background: linear-gradient(135deg, var(--cyan) 0%, #3ba8a5 100%);
  box-shadow: 0 4px 12px rgba(77, 212, 208, 0.4);
  font-weight: 500;
  letter-spacing: 0.02em;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(77, 212, 208, 0.6);
  }
}
```

---

### 8. Карточки галереи

**Проблема**: Все карточки одинаковые

**Решение**: Добавить вариации
```scss
.gallery__item {
  border-radius: 16px; // Мягче углы
  overflow: hidden;
  
  &:nth-child(odd) {
    transform: translateY(-20px); // Broken grid
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); // Spring easing
  }
}
```

---

### 9. Модальное окно

**Проблема**: Резкое появление

**Решение**: Smooth fade + backdrop blur
```scss
.modal-ny {
  backdrop-filter: blur(12px);
  background: rgba(10, 14, 26, 0.85);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

### 10. Scrollbar

**Текущее**: Кастомный scrollbar с creamy цветом

**Улучшение**: Добавить cyan accent
```scss
body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--cyan) 0%, var(--japanese-indigo) 100%);
  border-radius: 10px;
  
  &:hover {
    background: var(--cyan);
  }
}
```

---

## 🟢 Полировка (низкий приоритет)

### 11. Анимации

**Добавить**: Staggered entry для галереи
```scss
.gallery__item {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
  
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.1}s;
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### 12. Glassmorphism для карточек

```scss
.gallery__description {
  background: rgba(20, 24, 36, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 212, 208, 0.1);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.3);
}
```

---

### 13. Spotlight borders на hover

```scss
.gallery__item {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--cyan) 0%,
      transparent 50%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover::before {
    opacity: 1;
  }
}
```

---

## 📋 Приоритет внедрения

### Фаза 1 (Критично — 1-2 часа):
1. ✅ Заменить `#04070F` на `#0a0e1a`
2. ✅ Приглушить cyan до `#4dd4d0`
3. ✅ Добавить hover/focus states
4. ✅ Добавить max-width контейнер
5. ✅ Tinted shadows

### Фаза 2 (Важно — 2-3 часа):
6. ✅ Noise overlay на фон
7. ✅ Улучшить кнопки (gradient + glow)
8. ✅ Spring animations для карточек
9. ✅ Backdrop blur для модалки
10. ✅ Улучшить scrollbar

### Фаза 3 (Полировка — 1-2 часа):
11. ✅ Staggered entry анимации
12. ✅ Glassmorphism для карточек
13. ✅ Spotlight borders

---

## 🎯 Ожидаемый результат

| Метрика | До | После |
|---------|-----|-------|
| **Визуальная глубина** | Плоско | Многослойно |
| **Контрастность** | Резкая | Сбалансированная |
| **Интерактивность** | Статично | Живое |
| **Премиальность** | 6/10 | 9/10 |

---

**Следующий шаг**: Хочешь, чтобы я начал внедрять изменения? Начнем с Фазы 1 (критичные улучшения)?
