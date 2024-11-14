import { NavLink } from 'react-router-dom';
import { AppUrl } from '../../const';

const MenuBig = () => {
  return (
    <nav className='menu-big'>
      <ul className='menu-big__list'>
        <li className='menu-big__item'>
          <NavLink to={AppUrl.About} className='menu-big__link'>
            Обо мне
          </NavLink>
        </li>
        <li className='menu-big__item'>
          <NavLink to={AppUrl.Skills} className='menu-big__link'>
            Навыки
          </NavLink>
        </li>
        <li className='menu-big__item'>
          <NavLink to={AppUrl.Education} className='menu-big__link'>
            Обучение
          </NavLink>
        </li>
        <li className='menu-big__item'>
          <NavLink to={AppUrl.Experience} className='menu-big__link'>
            Опыт работы
          </NavLink>
        </li>
        <li className='menu-big__item'>
          <NavLink to={AppUrl.Projects} className='menu-big__link'>
            Проекты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBig;
