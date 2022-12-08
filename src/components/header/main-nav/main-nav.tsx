import { Link } from 'react-router-dom';
import { AppUrl } from '../../../consts';
import './main-nav.scss';

const MainNav = () => (
  <ul className="main-nav">
    <li className="main-nav__item">
      <Link to={AppUrl.About} className="main-nav__link main-nav__link--about">
      <span className='main-nav__text'>Обо мне</span>
      </Link>
    </li>
    
    <li className="main-nav__item">
      <Link to={AppUrl.Skills} className="main-nav__link main-nav__link--skills">
        <span className='main-nav__text'>Навыки</span>
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Education} className="main-nav__link main-nav__link--education">
      <span className='main-nav__text'>Обучение</span>
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Experience} className="main-nav__link main-nav__link--experience">
      <span className='main-nav__text'>Опыт работы</span>
      </Link>
    </li>
      
    <li className="main-nav__item">
      <Link to={AppUrl.Portfolio} className="main-nav__link main-nav__link--portfolio">
      <span className='main-nav__text'>Портфолио</span>
      </Link>
    </li>
  </ul>
);

export default MainNav;
