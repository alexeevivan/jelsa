# Исправление проблемы с правами доступа

## Проблема
Файлы в `dist/` принадлежат root, поэтому webpack не может их перезаписать.

## Решение

Выполни в терминале:

```bash
# Исправить права на dist
sudo chown -R $(whoami):staff dist/

# Удалить dist
rm -rf dist/

# Пересобрать проект
npm run build
```

## Проверка после сборки

```bash
# Проверить, что папки не пустые
ls -la dist/assets/content/party/party_airlines/

# Должны быть WebP файлы
find dist/assets/content/party/party_airlines/ -name "*.webp" | wc -l
```

## Что было исправлено

1. **webp-optimized.mjs**: Добавлена проверка `fs.existsSync(targetPath)` — теперь файлы конвертируются, даже если они в кэше, но отсутствуют в dist
2. **webpack.config.js**: CleanWebpackPlugin временно отключен (можно включить после исправления прав)

---

После исправления прав все изображения будут корректно конвертироваться в WebP и попадать в dist.
