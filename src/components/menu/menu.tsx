import { NavLink, useLocation } from 'react-router-dom';
import { AppUrl } from '../../const';
import { useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HIGHLIGHT_TOP_PADDING = 3;

const Menu = () => {
  const [test, setTest] = useState(0);

  const highlightRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    moveHighlight();
  }, [pathname]);

  const moveHighlight = () => {
    const activeLink = menuRef.current?.querySelector(
      `[data-path='${pathname}']`
    );
    if (menuRef.current && activeLink && highlightRef.current) {
      const top =
        activeLink?.getBoundingClientRect().top -
        menuRef.current?.getBoundingClientRect().top -
        HIGHLIGHT_TOP_PADDING;

      setTest(top);
      // highlightRef.current.style.top = `${top}px`;
    }
  };

  const isMainPage = pathname === AppUrl.Main;

  return (
    <motion.nav
      key='menu'
      className='menu'
      ref={menuRef}
      initial={false}
      variants={{
        close: { y: -333 },
        open: {
          y: 0,
          transition: {
            type: 'tween',
            delay: 1.4,
          },
        },
      }}
      animate={isMainPage ? 'close' : 'open'}
    >
      <ul className='menu__list'>
        <li className='menu__item'>
          <NavLink
            className='menu__link'
            to={AppUrl.About}
            data-path={AppUrl.About}
          >
            Обо мне
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink
            className='menu__link'
            to={AppUrl.Skills}
            data-path={AppUrl.Skills}
          >
            Навыки
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink
            className='menu__link'
            to={AppUrl.Education}
            data-path={AppUrl.Education}
          >
            Обучение
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink
            className='menu__link'
            to={AppUrl.Experience}
            data-path={AppUrl.Experience}
          >
            Опыт работы
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink
            className='menu__link'
            to={AppUrl.Projects}
            data-path={AppUrl.Projects}
          >
            Проекты
          </NavLink>
        </li>
      </ul>
      <div
        className='menu__highlight'
        ref={highlightRef}
        style={{ top: `${test}px` }}
      ></div>
    </motion.nav>
  );
};

export default Menu;
