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

const Projects = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      exit='exit'
      className='page projects'
    >
      <div className='projects__header'>
        <p className='projects__title'>Проекты</p>
        <Link
          to={'https://github.com/mirael26'}
          className='projects__github'
          target='_blank'
        >
          GitHub
        </Link>
      </div>
      <motion.ul
        className='projects__list'
        variants={{
          open: {
            transition: {
              delayChildren: isTransitionFromMainPage ? 1.5 : 0.6,
              staggerChildren: 0.15,
            },
          },
        }}
        initial={'close'}
        animate={'open'}
      >
        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name with-link'>
            <Link to={'https://elementcoffee.ru'} target='_blank'>
              Элемент кофе
            </Link>
          </p>
          <p className='projects__short-description'>
            Сайт для кофейни с адаптивной, кроссбраузерной версткой
          </p>
          <div className='projects__description projects__description--small'>
            <p>Верстка шапки сайта, страницы Меню.</p>
            <p>Адаптивная, кроссбраузерная верстка.</p>
            <p>Реализация плавного скролла.</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>Pug</li>
            <li className='projects__stack-item'>SCSS</li>
            <li className='projects__stack-item'>JavaScript</li>
          </ul>
        </motion.li>

        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name with-link'>
            <Link to={'https://pavlov-mc.ru'} target='_blank'>
              Павлов Медикаль
            </Link>
          </p>
          <p className='projects__short-description'>Сайт клиники</p>
          <div className='projects__description projects__description--small'>
            <p>Верстка страницы врача с каруселью.</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>Pug</li>
            <li className='projects__stack-item'>SCSS</li>
            <li className='projects__stack-item'>JavaScript</li>
          </ul>
        </motion.li>

        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name'>Внутренний портал MyGenetics</p>
          <p className='projects__short-description'>
            SPA приложение портала с внутренними сервисами компании
          </p>
          <div className='projects__description projects__description--large'>
            <p>Фронтенд на React и TypeScript.</p>
            <p>Стор на Redux с кешированием в LocalStorage.</p>
            <p>Роутинг на react-router-dom v8.</p>
            <p>Авторизация с использованием jwt токенов.</p>
            <p>Формы на react-hook-form</p>
            <p>
              Сложные таблица с выделением ячеек, контекстными меню,
              фильтрацией, сортировкой, с сохранением применяемых настроек в
              браузере.
            </p>
            <p>Форма загрузки файлов</p>
            <p>Запросы на бэк по REST API</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>React</li>
            <li className='projects__stack-item'>Redux</li>
            <li className='projects__stack-item'>TypeScript</li>
            <li className='projects__stack-item'>SCSS</li>
            <li className='projects__stack-item'>REST API</li>
          </ul>
        </motion.li>

        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name with-link'>
            <Link to={'https://mygenetics.ru/vip/'} target='_blank'>
              MyGenetics VIP
            </Link>
          </p>
          <p className='projects__short-description'>
            Лендинг с адаптивной версткой
          </p>
          <div className='projects__description projects__description--small'>
            <p>Верстка лендинга на флексах.</p>
            <p>Адаптив под десктоп и мобильные устройства.</p>
            <p>Разработка карусели, аккордеона.</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>HTML</li>
            <li className='projects__stack-item'>SCSS</li>
            <li className='projects__stack-item'>JavaScript</li>
          </ul>
        </motion.li>

        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name'>Личный кабинет клиента</p>
          <p className='projects__short-description'>
            SPA приложение личного кабинета клиента на React и TypeScript
          </p>
          <div className='projects__description projects__description--medium'>
            <p>Верстка приложения.</p>
            <p>Разработка ui-kit.</p>
            <p>Разработка кастомного календаря на основе MUI date-picker.</p>
            <p>Сложная много страничная анкета на react-hook-forms.</p>
            <p>Роутинг на react-router-dom v8.</p>
            <p>Встраивание сторис, карусели.</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>React</li>
            <li className='projects__stack-item'>Redux</li>
            <li className='projects__stack-item'>TypeScript</li>
            <li className='projects__stack-item'>SCSS</li>
          </ul>
        </motion.li>

        <motion.li className='projects__item' variants={itemVariants}>
          <p className='projects__name with-link'>
            <Link
              to={
                'https://drive.google.com/file/d/1wWelEUgfhyDQn2rbXiHundO36R9yxtb6/view'
              }
              target='_blank'
            >
              Генетические отчеты
            </Link>
          </p>
          <p className='projects__short-description'>
            Шаблоны генетических отчетов с динамическим подключением данных
          </p>
          <div className='projects__description projects__description--small'>
            <p>Верстка шаблонов отчетов.</p>
            <p>Написание фрагментов на PostHTML.</p>
            <p>Подключение динамики посредством Thymeleaf.</p>
          </div>
          <ul className='projects__stack-list'>
            <li className='projects__stack-item'>HTML</li>
            <li className='projects__stack-item'>PostHTML</li>
            <li className='projects__stack-item'>SCSS</li>
            <li className='projects__stack-item'>JavaScript</li>
            <li className='projects__stack-item'>Thymeleaf</li>
          </ul>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default Projects;
