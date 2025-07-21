# 🚀 Настройка чат-бота "Диванчик"

## 📋 Предварительные требования

- Node.js 18+ 
- npm или yarn
- API ключ OpenRouter (бесплатный)

## 🔧 Пошаговая настройка

### 1. Установка зависимостей
```bash
npm install
```

### 2. Получение API ключа OpenRouter

1. Перейдите на [OpenRouter](https://openrouter.ai/)
2. Зарегистрируйтесь (можно через GitHub)
3. В личном кабинете найдите раздел "API Keys"
4. Создайте новый ключ
5. Скопируйте ключ

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# OpenRouter API Key
OPENROUTER_API_KEY=sk-or-v1-ваш_ключ_здесь

# Site URL (для production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Запуск проекта

```bash
npm run dev
```

Откройте браузер: [http://localhost:3000](http://localhost:3000)

## 🎯 Тестирование

Попробуйте задать следующие вопросы:

- "Как выбрать подходящий размер дивана?"
- "Какие ткани лучше всего подходят для детей?"
- "Как ухаживать за кожаным диваном?"
- "Сколько стоит доставка дивана?"

## 🔄 Альтернативные API

### GigaChat

Если хотите использовать GigaChat вместо OpenRouter:

1. Получите API ключ на [GigaChat](https://developers.sber.ru/portal/products/gigachat)
2. Измените переменную окружения:
   ```env
   GIGACHAT_API_KEY=ваш_ключ_gigachat
   ```
3. Отредактируйте `src/app/api/ask/route.ts`:
   ```typescript
   const response = await fetch('https://gigachat.devices.sberbank.ru/api/v1/chat/completions', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${process.env.GIGACHAT_API_KEY}`,
     },
     body: JSON.stringify({
       model: 'GigaChat:latest',
       messages: [
         { role: 'system', content: SYSTEM_PROMPT },
         { role: 'user', content: question }
       ],
       max_tokens: 500,
       temperature: 0.7
     })
   });
   ```

## 🐛 Устранение неполадок

### Ошибка "API request failed"
- Проверьте правильность API ключа
- Убедитесь, что ключ активен в OpenRouter
- Проверьте баланс на аккаунте

### Ошибка "Cannot find module"
```bash
npm install
npm run build
```

### Проблемы с TypeScript
```bash
npm run lint
```

## 📁 Структура проекта

```
src/
├── app/
│   ├── api/ask/route.ts     # API роут для чат-бота
│   ├── components/
│   │   └── InfoModal.tsx    # Модальное окно с информацией
│   └── page.tsx             # Главная страница
├── constants/
│   └── prompts.ts           # Системные промпты
├── types/
│   └── chat.ts              # TypeScript типы
└── utils/
    └── api.ts               # Утилиты для API
```

## 🚀 Деплой на Vercel

1. Подключите репозиторий к [Vercel](https://vercel.com)
2. Добавьте переменные окружения в настройках проекта
3. Деплой произойдет автоматически

## 📝 Лицензия

Учебный проект для изучения Next.js и интеграции с AI API. 
