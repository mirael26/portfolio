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
