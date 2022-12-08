import { Link } from 'react-router-dom';
import { AppUrl } from '../../consts';
import './header.scss';
import MainNav from './main-nav/main-nav';

const Header = () => (
  <div className="header">
    <Link to={AppUrl.Main} className="header__badge-link">
      <div className="header__badge">
        Эльмира Ильясова
        <span className="header__badge-subtitle">Frontend developer</span>
      </div>
    </Link>

    <MainNav/>
  </div>
);

export default Header;
