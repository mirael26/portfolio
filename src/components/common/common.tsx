import { useLocation } from 'react-router-dom';
import Menu from '../menu/menu';
import { AppUrl } from '../../const';
import { motion, Variants } from 'framer-motion';
import MenuBig from '../menu-big/menu-big';
import Contacts from '../contacts/contacts';

const nameVariants: Variants = {
  initialMain: {
    y: 50,
    opacity: 0,
    fontSize: '64px',
    top: '20vh',
    left: 'calc(50% - 325px)',
  },
  main: {
    y: 0,
    opacity: 1,
    fontSize: '64px',
    top: '20vh',
    left: 'calc(50% - 325px)',
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delay: 0.4,
    },
  },
  common: {
    y: 0,
    opacity: 1,
    top: '22px',
    left: 0,
    fontSize: ['64px', '24px', '32px'],
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const specialtyVariants = {
  initialMain: {
    y: 50,
    opacity: 0,
    top: '30vh',
    left: 'calc(50% - 187px)',
    fontSize: '36px',
  },
  common: {
    y: 0,
    opacity: 1,
    top: '63px',
    left: 0,
    fontSize: ['36px', '8px', '16px'],
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.5,
    },
  },
  main: {
    y: 0,
    opacity: 1,
    top: '30vh',
    fontSize: '36px',
    left: 'calc(50% - 187px)',
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delay: 0.7,
    },
  },
};

const Common = () => {
  const { pathname } = useLocation();

  const isMainPage = pathname === AppUrl.Main;

  return (
    <div className={`common${isMainPage ? ' common--main' : ''}`}>
      <motion.p
        className='common__name'
        variants={nameVariants}
        initial={isMainPage ? 'initialMain' : false}
        animate={isMainPage ? 'main' : 'common'}
      >
        Эльмира Ильясова
      </motion.p>
      <motion.p
        className='common__specialty'
        variants={specialtyVariants}
        initial={isMainPage ? 'initialMain' : false}
        animate={isMainPage ? 'main' : 'common'}
      >
        Frontend разработчик
      </motion.p>
      {/* {pathname !== AppUrl.Main && <Menu />} */}
      <Menu />
      <MenuBig />
      <Contacts />
    </div>
  );
};

export default Common;
