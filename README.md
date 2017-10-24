# DREAM_BOT_STANKIN
## Ник бота в telegram: @Stankin1703_bot [Ссылка](https://t.me/@Stankin1703_bot)


## Состав проект-команды:

Координатор/Дипломат - [Павел Субботин](https://github.com/paulsub) ([Прошлогодний сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/Subbotin/) | [Прошлогодняя статья](https://github.com/stankin/oop/wiki/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%E2%84%964 | [Статья "Отличия PaaS, SaaS и IaaS"](https://github.com/stankin/inet-2017/wiki/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F-PaaS,-SaaS-%D0%B8-IaaS)))

Реализатор/Исполнитель - [Леонтьев Иван](https://github.com/ivanleontev) ([Сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/leontev/) | [Статья](https://github.com/stankin/oop/wiki/%D0%A2%D1%8D%D0%B3%D0%B8-HTML.--a)) [Стаья Promise](https://github.com/stankin/inet-2017/wiki/Promise)

Исследователь - [Максим Гуц](https://github.com/MaximGuts) ([Сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/Guts/) | [Статья](https://github.com/stankin/oop/wiki/UML.-%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0-%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8))

Генератор идей - [Алексей Антипов](https://github.com/Alexey28) ([Сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/Antipov/) | [Статья](https://github.com/stankin/oop/wiki/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%E2%84%966))

Эксперт - [Денис Саутин](https://github.com/SautinDenis) ([Сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/Sautin/)  | [Статья](https://github.com/stankin/oop/wiki/UML.-%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D1%82%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F))

Творец - [Мария Бартель](https://github.com/mariabartel) ([Сайт](http://paul.1gb.ru/stankin/oop/sandbox/idb-13-13/Bartel/) | [Статья](https://github.com/stankin/oop/wiki/%D0%A2%D0%B5%D0%B3%D0%B8-HTML.-Style))


## Установка
Для начала понадобится установить Node.js [официальный сайт](https://nodejs.org/en/)

Затем необходимо скачать репозиторий:
```bash
git clone https://github.com/dreamteamstankin/project
```
Установка зависимостей:
```bash
npm install
```
После установки нужно запустить работу сервера, для того, чтобы бот понимал запросы и отвечал пользователю, это можно сделать стандартной командой 
```bash
node app.js
```
либо [nodemon](https://github.com/remy/nodemon), который отслеживает изменений файла и перезапускает при необходимости сервер
```bash
nodemon app.js
```

Команды, которые выполняет бот:
- /напомни %заметка% в hh:mm (при установке времени )
- /заметки (вывод всех заметок с заданным временем)
- /удалить (удаление заметок с заданным временем)
- /курс (курс доллара с yandex.ru)
- /запомни (запись заметки без временного ограничения)
- /напоминания (вывод всех заметок без временного ограничения)
- /удалитьнапоминания (удаление всех заметок без временного ограничения)

### Ссылки на официальные репозитории и документации:
[Модуль для работы с телегам ботом node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)

[Модуль для парсигна сайта yadnex.ru](https://github.com/rchipka/node-osmosis)

[Telegram API](https://core.telegram.org/bots/api)


