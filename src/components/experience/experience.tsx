import { motion, Variants } from 'motion/react';
import { routeVariants } from '../../animation/variants';
import { Link, useLocation } from 'react-router-dom';

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 1,
      mass: 0.5,
    },
  },
  close: { y: 222, opacity: 0 },
};

const Experience = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      exit='exit'
      className='page experience'
    >
      <h2 className='experience__title'>Опыт работы</h2>

      <motion.ul
        className='experience__list'
        variants={{
          open: {
            transition: {
              delayChildren: isTransitionFromMainPage ? 1.6 : 0.7,
              staggerChildren: 0.2,
            },
          },
        }}
        initial={'close'}
        animate={'open'}
      >
        <motion.li className='experience__item' variants={itemVariants}>
          <div className='experience__header'>
            <p className='experience__date'>
              апр 2023 - <br />
              сейчас
            </p>
            <div className='experience__company-block'>
              <Link
                to={'https://mygenetics.ru'}
                className='experience__company'
              >
                MyGenetics
              </Link>
              <p className='experience__position'>
                Младший фронтенд-разработчик
              </p>
            </div>
          </div>
          <article className='experience__text'>
            <ul>
              <li>
                Разработка SPA-приложений на React (functional components, react
                hooks, custom hooks, memoization)
              </li>
              <li>
                Написание кода на Typescript (типизация компонентов и данных,
                interfaces, types, generics)
              </li>
              <li> Настройка роутинга на react-router-dom v8</li>
              <li>
                Создание форм на react-hook-form (валидация, зависимости между
                полями: watch, массивы полей с useFieldArray)
              </li>
              <li>
                Написание хранилища на Redux (actions, reducers, кэширование в
                LocalStorage)
              </li>
              <li>
                Написание REST-API запросов на бэк (axios, настройка
                interceptors)
              </li>
              <li> Разработка UI kit</li>
              <li> Подключение и настройка сторонних библиотек</li>
              <li>
                Использование и кастомизация компонентов библиотеки Material UI
              </li>
              <li> Адаптивная верстка лендингов по макетам из Figma</li>
              <li> Добавление CSS анимаций, keyframes</li>
              <li>
                Верстка шаблонов по макетам из Figma с использованием
                шаблонизатора Thymeleaf с использованием препроцессоров SCSS,
                posthtml
              </li>

              <li>Поддержка и доработка существующих проектов, фикс багов</li>
              <li>Работа в команде с ПМ, бэкенд-разработчиками. </li>
            </ul>
            <p>
              Проекты: Личный кабинет клиента. Разделы в портале компании: ЛК
              для лаборатории, ЛК для отдела доставки, ЛК для отдела разработки.
              Генетический отчет MyWellness, MyBeauty. Лендинг MyGenetics VIP.
            </p>
          </article>
          <ul className='experience__stack-list'>
            <li className='experience__stack-item'>Стек:</li>
            <li className='experience__stack-item'>React</li>
            <li className='experience__stack-item'>Redux</li>
            <li className='experience__stack-item'>Typescript</li>
            <li className='experience__stack-item'>HTML</li>
            <li className='experience__stack-item'>SCSS</li>
            <li className='experience__stack-item'>JavaScript</li>
            <li className='experience__stack-item'>Thymeleaf</li>
          </ul>
        </motion.li>

        <motion.li className='experience__item' variants={itemVariants}>
          <div className='experience__header'>
            <p className='experience__date'>
              дек 2022 - <br />
              март 2023
            </p>
            <div className='experience__company-block'>
              <Link to={'https://ligaa.agency'} className='experience__company'>
                Лига А
              </Link>
              <p className='experience__position'>Стажер</p>
            </div>
          </div>
          <article className='experience__text'>
            <ul>
              <li>Разработка SPA-приложения на React/Typescript</li>
              <li>Настройка роутинга (react router dom v5)</li>
              <li>Настройка отправки запросов на бэк</li>
              <li>
                Написание unit- и UI тестов на Jest и React testing library
              </li>
              <li>
                Адаптивная и кроссбраузерная верстка с использованием
                препроцессоров Pug и SCSS
              </li>
              <li>Верстка по макетам Figma</li>
              <li>
                Написание JS фич (скрывающийся хэдер, плавный подскролл,
                карусель)
              </li>
              <li>
                Работа в команде с другими разработчиками, тимлидом и
                тестировщиками.
              </li>
            </ul>
            <p>
              Проекты: Сайт компании Элемент кофе, Сайт компании Павлов
              Медикаль.
            </p>
          </article>
          <ul className='experience__stack-list'>
            <li className='experience__stack-item'>Стек:</li>
            <li className='experience__stack-item'>SCSS</li>
            <li className='experience__stack-item'>Pug</li>
            <li className='experience__stack-item'>JavaScript</li>
            <li className='experience__stack-item'>TypeScript</li>
            <li className='experience__stack-item'>React</li>
            <li className='experience__stack-item'>Redux</li>
            <li className='experience__stack-item'>Jest</li>
          </ul>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default Experience;
