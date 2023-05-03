### Демо проект работы микрофронтендов с помощью плагина Module Federation

1. Зайти в папку каждого из проектов. Установить зависимости и стартануть мифрофронтенд.

   Например, из корня приложения запускаем:

   `cd about `

   `yarn && yarn start`

2. Порядок запуска приложений:

#### HOST - приложение

- `host` - загружает в себя удалённые модули (содержит Routing, главную страницу)

#### Удаленные модули (подключаемые к HOST  микрофронтенды)

- `store` - микрофронтенд для хранения состояния всех приложений
- `about` - микрофронтенд страницы About (содержит схему работы)
- `nav` - микрофронтенд навигации, содержит хедер приложения
- `cart` - микрофронтенд страницы "корзины"

3. Запуск последнего приложения host откроется по пути `http://localhost:3000/` и соберет всё микрофронтенды и приложение воедино.
