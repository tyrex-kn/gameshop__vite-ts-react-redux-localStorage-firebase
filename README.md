# 🎮 GameShop

Современный интернет-магазин видеоигр, построенный на React и TypeScript с интеграцией Firebase для хранения данных.

## 🚀 Особенности (Features)

*   **Каталог игр:** Динамическая загрузка данных из базы данных Firestore.
*   **Корзина и Избранное:** Возможность добавлять товары в корзину и оформлять заказы.
*   **Persistent Storage:** Использование `localStorage` для сохранения состояния корзины — товары не исчезнут после перезагрузки страницы.
*   **Оформление заказа:** Полноценная форма отправки заказа с сохранением истории в Firebase.
*   **Роутинг:** Плавная навигация между страницами без перезагрузки благодаря `react-router-dom`.

## 🛠 Стек технологий (Tech Stack)

*   **Frontend:** React (Vite), TypeScript
*   **State Management:** Redux (Toolkit)
*   **Backend / DB:** Firebase (Firestore)
*   **Storage:** LocalStorage API
*   **Routing:** React Router Dom
*   **Styling:** HTML5, CSS3

## 💻 Запуск проекта (Installation)

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com
   ```

2. Перейдите в папку проекта:
   ```bash
   cd gameshop__vite-ts-react-redux-localStorage-firebase
   ```

3. Установите зависимости:
   ```bash
   npm install
   ```

4. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```

## ⚙️ Настройка окружения (Firebase)

Для демонстрации работы, firebase уже подключен в коде. Поэтому .env здесь не используется
