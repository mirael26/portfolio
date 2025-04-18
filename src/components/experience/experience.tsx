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
          <div className='experience__text'>
            <ul>
              <li>
                Верстка шаблонов по макетам из Figma с использованием
                шаблонизатора Thymeleaf
              </li>
              <li>Разработка лендингов</li>
              <li>
                Разработка личных кабинетов (SPA приложения на React + Redux,
                запросы на бэк: RestAPI, axios, формы на react-hook-forms)
              </li>
              <li>Поддержка и доработка существующих проектов</li>
              <li>Тесная работа с разработчиками, пм, дизайнером</li>
            </ul>
          </div>
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
          <p className='experience__text'>
            <ul>
              <li>
                Разработка SPA-приложения, поддержка существующих проектов
              </li>
              <li>Адаптивная и кроссбраузерная верстка</li>
              <li>Верстка по макетам в Figma</li>
              <li>Написание юнит-тестов</li>
              <li>
                Работа в команде с разработчиками, тимлидом и тестировщиками
              </li>
            </ul>
          </p>
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
