import { NavLink, useLocation } from 'react-router-dom';
import { AppUrl } from '../../const';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  open: { x: 0, opacity: 1 },
  close: { x: -222, opacity: 0 },
  exit: { x: -222, opacity: 0 },
};

const MenuBig = () => {
  const { pathname } = useLocation();
  const isMainPage = pathname === AppUrl.Main;

  return (
    <AnimatePresence>
      {isMainPage && (
        <nav className='menu-big'>
          <motion.ul
            className='menu-big__list'
            variants={{
              close: { x: 300, opacity: 0 },
              open: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  ease: 'easeOut',
                  duration: 0.5,
                  delay: 1.2,
                  delayChildren: 1.2 + 0.35,
                  staggerChildren: 0.2,
                },
              },
              exit: {
                x: 0,
                opacity: 0,
                transition: {
                  delay: 0.3,
                  delayChildren: 0,
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
            }}
            initial={'close'}
            animate={'open'}
            exit={'exit'}
          >
            <motion.li className='menu-big__item'>
              <NavLink
                to={AppUrl.About}
                state={{ fromMain: true }}
                className='menu-big__link'
              >
                Обо мне
              </NavLink>
            </motion.li>
            <motion.li className='menu-big__item' variants={itemVariants}>
              <NavLink
                to={AppUrl.Skills}
                state={{ fromMain: true }}
                className='menu-big__link'
              >
                Навыки
              </NavLink>
            </motion.li>
            <motion.li className='menu-big__item' variants={itemVariants}>
              <NavLink
                to={AppUrl.Education}
                state={{ fromMain: true }}
                className='menu-big__link'
              >
                Обучение
              </NavLink>
            </motion.li>
            <motion.li className='menu-big__item' variants={itemVariants}>
              <NavLink
                to={AppUrl.Experience}
                state={{ fromMain: true }}
                className='menu-big__link'
              >
                Опыт работы
              </NavLink>
            </motion.li>
            <motion.li className='menu-big__item' variants={itemVariants}>
              <NavLink
                to={AppUrl.Projects}
                state={{ fromMain: true }}
                className='menu-big__link'
              >
                Проекты
              </NavLink>
            </motion.li>
          </motion.ul>
        </nav>
      )}
    </AnimatePresence>
  );
};

export default MenuBig;
