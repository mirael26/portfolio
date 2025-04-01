import { motion } from 'framer-motion';
import { AppUrl } from '../../const';
import { Link, useLocation } from 'react-router-dom';

const Contacts = () => {
  const { pathname } = useLocation();

  const isMainPage = pathname === AppUrl.Main;

  return (
    <motion.aside
      key='contacts'
      className='contacts'
      initial={false}
      variants={{
        close: { y: 333 },
        open: {
          y: 0,
          transition: {
            type: 'tween',
            delay: 1.2,
          },
        },
      }}
      animate={isMainPage ? 'close' : 'open'}
    >
      <h2 className='contacts__title'>Контакты</h2>
      <ul className='contacts__list'>
        <li>
          <Link
            to={'https://t.me/mirael26'}
            className='contacts__link contacts__link--telegram'
            target='_blank'
          >
            Telegram
          </Link>
        </li>
        <li>
          <Link
            to={'https://vk.com/mirael26'}
            className='contacts__link contacts__link--vk'
            target='_blank'
          >
            ВК
          </Link>
        </li>
      </ul>
      <p className='contacts__text'>Почта: capricorn_26@mail.ru</p>
    </motion.aside>
  );
};

export default Contacts;
