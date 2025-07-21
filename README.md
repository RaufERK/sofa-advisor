# Sofa Advisor - Чат-бот службы поддержки

Учебный проект чат-бота для мебельной компании "Диванчик" на Next.js + TypeScript + Tailwind CSS.

## 🚀 Быстрый старт

1. **Установка зависимостей:**
   ```bash
   npm install
   ```

2. **Настройка переменных окружения:**
   Создайте файл `.env.local` в корне проекта:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Получение API ключа:**
   - Зарегистрируйтесь на [OpenRouter](https://openrouter.ai/)
   - Получите API ключ в личном кабинете
   - Вставьте ключ в переменную `OPENROUTER_API_KEY`

4. **Запуск проекта:**
   ```bash
   npm run dev
   ```

5. **Откройте браузер:**
   Перейдите по адресу [http://localhost:3000](http://localhost:3000)

## 🛠 Технологии

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS
- **API:** OpenRouter (Claude 3 Haiku)
- **Architecture:** App Router, Server Actions

## 📁 Структура проекта

```
src/
├── app/
│   ├── api/
│   │   └── ask/
│   │       └── route.ts          # API роут для обработки запросов
│   ├── page.tsx                  # Главная страница с интерфейсом
│   ├── layout.tsx                # Корневой layout
│   └── globals.css               # Глобальные стили
```

## 🎯 Функциональность

- **Интерфейс:** Минималистичный дизайн с формой ввода вопроса
- **API интеграция:** Запросы к OpenRouter API через серверный роут
- **Системный промпт:** Специализация на вопросах о диванах
- **Обработка ошибок:** Валидация и обработка ошибок API
- **Состояние загрузки:** Индикатор "Пишет ответ..." во время ожидания
- **Адаптивный дизайн:** Оптимизация для мобильных устройств

## 🔧 Настройка

### Альтернативные API

Для использования GigaChat вместо OpenRouter измените в `src/app/api/ask/route.ts`:

```typescript
// Замените URL и заголовки на GigaChat API
const response = await fetch('https://gigachat.devices.sberbank.ru/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.GIGACHAT_API_KEY}`,
  },
  // ... остальные параметры
});
```

### Кастомизация промпта

Измените `SYSTEM_PROMPT` в `src/app/api/ask/route.ts` для настройки поведения бота.

## 📝 Примеры вопросов

- Как выбрать подходящий размер дивана?
- Какие ткани лучше всего подходят для детей?
- Как ухаживать за кожаным диваном?
- Сколько стоит доставка дивана?
- Есть ли гарантия на диваны?

## 🚀 Деплой

Проект готов к деплою на Vercel:

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения в настройках проекта
3. Деплой произойдет автоматически

## 📄 Лицензия

Учебный проект для изучения Next.js и интеграции с AI API.
