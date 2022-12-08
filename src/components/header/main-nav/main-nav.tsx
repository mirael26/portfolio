import { Link } from 'react-router-dom';
import { AppUrl } from '../../../consts';
import './main-nav.scss';

const MainNav = () => (
  <ul className="main-nav">
    <li className="main-nav__item">
      <Link to={AppUrl.About} className="main-nav__link main-nav__link--about">
        Обо мне
      </Link>
    </li>
    
    <li className="main-nav__item">
      <Link to={AppUrl.Skills} className="main-nav__link main-nav__link--skills">
        Навыки
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Education} className="main-nav__link main-nav__link--education">
        Обучение
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Experience} className="main-nav__link main-nav__link--experience">
        Опыт работы
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Portfolio} className="main-nav__link main-nav__link--portfolio">
        Портфолио
      </Link>
    </li>
  </ul>
);

export default MainNav;
