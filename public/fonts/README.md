# Шрифты

Сюда нужно положить лицензионные файлы шрифта **Tiempos Text**
(Klim Type Foundry) в формате `woff2`. Имена файлов должны совпадать с тем,
что прописано в `@font-face` (см. `app/assets/css/main.css`):

- `TiemposText-Regular.woff2` — начертание 400
- `TiemposText-Semibold.woff2` — начертание 600 (используется в заголовке hero)

Важно: версия шрифта должна включать кириллицу (заголовок на русском).

Пока файлов нет, заголовок отображается фолбэком — `Georgia, "Times New Roman", serif`.
