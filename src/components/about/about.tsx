import { motion } from 'motion/react';
import { routeVariants } from '../../animation/variants';
import photo from './../../img/photo.png';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      className='about'
    >
      <p className='about__title'>Обо мне</p>
      <div className='about__content'>
        <div className='about__text'>
          <p>Я Frontend разработчик, занимаюсь разработкой уже более 3 лет.</p>
          <p>
            Меня всегда привлекал дизайн и нравились красивые интерфейсы.
            Однажды попробовала себя в верстке, и меня это увлекло. Какое-то
            время занималась самостоятельно, далее успешно окончила годичный
            интенсив по фронтенду от HTML Academy.
          </p>
          <p>Обладаю такими полезными качествами, как:</p>
          <ul>
            <li>настойчивость</li>
            <li>ответственность</li>
            <li>неконфликтность</li>
          </ul>
          <p>
            Люблю писать аккуратный код, стараюсь находить решения
            самостоятельно, в меру перфекционист.
          </p>
          <p>
            В свободное время я играю в компьютерные игры, рисую. Люблю
            путешествовать.
          </p>
        </div>
        <img
          className='about__photo'
          src={photo}
          width='169'
          height='169'
          alt='Мое фото'
        />
      </div>
    </motion.section>
  );
};

export default About;
