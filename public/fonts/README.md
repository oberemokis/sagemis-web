# Шрифты

Лицензионный шрифт **Tiempos Text** (Klim Type Foundry), формат `woff2`.
Имена файлов должны совпадать с `@font-face` в `app/assets/css/main.css`:

- `TiemposText-Regular.woff2` — начертание 400 (используется в заголовке hero)

Заголовок hero выводится в Regular (400). Если захотите более жирное начертание,
добавьте `TiemposText-Semibold.woff2` (600), верните в `main.css` соответствующий
`@font-face` и поставьте на заголовке класс `font-semibold`.

Версия шрифта должна включать кириллицу. Фолбэк — `Georgia, "Times New Roman", serif`.
