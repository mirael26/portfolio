import { IPortfolioData } from './type';

export const AppUrl = {
  Main: '/',
  About: '/about',
  Skills: '/skills',
  Education: '/education',
  Experience: '/experience',
  Portfolio: '/portfolio',
} as const;

export const educationInfo = [
  {
    year: '2008-2013',
    title: 'Маркетинг (высшее)',
    institution: 'СибУПК'
  },
  {
    year: '2019',
    title: 'HTML и CSS, уровень 1',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'HTML и CSS, уровень 2',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'JavaScript. Профессиональная разработка веб-интерфейсов',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'JavaScript. Архитектура клиентских приложений',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'React. Разработка сложных клиентских приложений',
    institution: 'HTML Academy'
  },
];

export const experienceInfo = [
  {
    period: 'Июнь - Сентябрь 2021',
    company: 'Emdev',
    position: 'Младший фронтенд разработчик',
    description: 'Поддержка и доработка существующего кода, разработка новых компонентов на базе платформы Liferay, устранение багов, верстка.\nРазработала тему для корпоративного портала компании С-плюс.\n\nСтек: JavaScript, React, HTML, CSS, SCSS'
  },
  {
    period: 'Июль - Август 2022',
    company: 'Hotels.ru',
    position: 'Intern frontend developer',
    description: 'Учебная практика с конкурсным отбором и трудоустройством лучших кандидатов.\nДошла до финала и заняла 4 место (из ~250 человек).\n\nСтек: JavaScript, TypeScript, React, Redux, HTML, CSS, SCSS'
  },
  {
    period: 'Октябрь - Декабрь 2022',
    company: 'Акселератор HTML academy',
    position: 'Junior React-разработчик',
    description: 'Практика в условиях, приближенных к реальной коммерческой разработке. Разработка SPA приложения по техническому заданию в команде с ПМ, наставником и тестировщиком.\n\nСтек: TypeScript, React, Redux, Jest'
  },
  {
    period: 'Декабрь 2022 - настоящее время',
    company: 'Лига-А',
    position: 'Стажер Frontend-разработчик',
    description: 'Разработка коммерческих проектов по аутсорсу, верстка и фронтенд\n\nСтек: Typescript, React, Redux, SCSS, Pug'
  },
];

export const portfolioData = [
  {
    title: 'Camera shop',
    description: 'Интернет-магазин фото- и видеокамер. Каталог с сортировкой, фильтрацией и пагинацией. В проекте реализованы поиск товаров по сайту, корзина с промокодом, форма добавления отзыва. Фильтры и страницы сохраняются в адресной строке с помощью строки запроса. Промо-баннер, товары и промокод запрашиваются с сервера с помощью REST API. Проект полностью покрыт юнит-тестами.\n\nСтек: TypeScript, React, Redux, Axios, Jest',
    demoSrc: 'https://ilyasova-camera-shop.vercel.app',
    codeSrc: 'https://github.com/mirael26/camera-shop',
    layout: false,
    spa: true,
    typescript: true,
    redux: true,
    animation: false,
    tests: true,
    preview: 'camera-shop-preview.png'
  },
  {
    title: 'Слонум',
    description: 'Лендинг для конкурса детского рисунка.\nВерстка для десктопа, анимации на CSS.\n\nСтек: TypeScript, React, SCSS',
    demoSrc: 'https://mirael26.github.io/drawing-competition/',
    codeSrc: 'https://github.com/mirael26/drawing-competition',
    layout: true,
    spa: false,
    typescript: true,
    redux: false,
    animation: true,
    tests: false,
    preview: 'drawing-competition-preview.png'
  },
  {
    title: 'Agency',
    description: 'Небольшое тестовое задание со страничкой портфолио, карточками и работающей фильтрацией карточек.\nАдаптивная верстка для трех форматов устройств, React хуки.\n\nСтек: TypeScript, React, SCSS',
    demoSrc: 'https://mirael26.github.io/jupiter-test/',
    codeSrc: 'https://github.com/mirael26/jupiter-test',
    layout: true,
    spa: false,
    typescript: true,
    redux: false,
    animation: false,
    tests: false,
    preview: 'agency-preview.png'
  },
  {
    title: 'Книга контактов',
    description: 'Тестовое задание, содержащее страницу авторизации и книгу контактов. Реализована форма логина и регистрации, возможность добавления, удаления и редактирования контактов, поиска по контактам. Для формы регистрации и добавления контакта реализована валидация.\n\nСтек: React, Redux, TypeScript, SCSS, fake-json-server, Material UI',
    codeSrc: 'https://github.com/mirael26/takeoff-test',
    layout: true,
    spa: true,
    typescript: true,
    redux: true,
    animation: false,
    tests: false,
    preview: 'phone-book-preview.png'
  },
  {
    title: 'Escape Room',
    description: 'Каталог квестов с фильтрацией по жанрам, формой заявки и страницей контактов. На форме заявки реализована валидация. В страницу контактов встроена 2-gis карта.\n\n\nСтек: TypeScript, React, Redux, Axios',
    codeSrc: 'https://github.com/mirael26/htmlacademy-grading',
    layout: false,
    spa: true,
    typescript: true,
    redux: true,
    animation: false,
    tests: false,
    preview: 'escape-room-preview.png'
  },
  {
    title: 'Tic-tac-toe',
    description: 'Минималистичная игра крестики-нолики с выводом победителя.\n\nСтек: TypeScript, React, Redux',
    demoSrc: 'https://mirael26.github.io/tic-tac-toe',
    codeSrc: 'https://github.com/mirael26/tic-tac-toe',
    layout: true,
    spa: false,
    typescript: true, 
    redux: true,
    animation: true,
    tests: false,
    preview: 'tic-tac-toe-preview.png'
  },
  {
    title: 'Pink',
    description: 'Учебный проект по верстке сайта для фото-соцсети.\nВерстка по методологии БЭМ, адаптивная верстка под три формата, ретина.\n\nСтек: HTML, SCSS, БЭМ',
    demoSrc: 'https://mirael26.github.io/pink-demo',
    codeSrc: 'https://github.com/mirael26/471345-pink-19',
    layout: true,
    spa: false,
    typescript: false,
    redux: false,
    animation: false,
    tests: false,
    preview: 'pink-preview.png'
  },
];
