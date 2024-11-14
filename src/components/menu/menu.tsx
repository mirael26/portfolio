import { NavLink, useLocation } from 'react-router-dom';
import { AppUrl } from '../../const';
import { useEffect, useRef } from 'react';

const HIGHLIGHT_TOP_PADDING = 3;

const Menu = () => {
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    moveHighlight();
  }, [location.pathname]);

  const moveHighlight = () => {
    const activeLink = menuRef.current?.querySelector(
      `[data-path='${location.pathname}']`
    );
    if (menuRef.current && activeLink && highlightRef.current) {
      const top =
        activeLink?.getBoundingClientRect().y -
        menuRef.current?.getBoundingClientRect().y -
        HIGHLIGHT_TOP_PADDING;

      highlightRef.current.style.top = `${top}px`;
    }
  };

  return (
    <nav className='menu' ref={menuRef}>
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
      <div className='menu__highlight' ref={highlightRef}></div>
    </nav>
  );
};

export default Menu;
