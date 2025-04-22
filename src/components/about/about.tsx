import { motion } from 'motion/react';
import { routeVariants } from '../../animation/variants';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      exit='exit'
      className='about'
    >
      <h2 className='about__title'>Обо мне</h2>
      <motion.div
        className='about__content'
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 1,
              mass: 0.5,
              delay: isTransitionFromMainPage ? 1.5 : 0.6,
            },
          },
          close: { y: 222, opacity: 0 },
        }}
        initial={'close'}
        animate={'open'}
      >
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
          <p>Люблю писать аккуратный код, в меру перфекционист.</p>
          <p>
            Имею коммерческий опыт работы более 2 лет в небольших командах (3-5
            человек).
          </p>
          <p>
            Основной упор в развитии сейчас делаю на написании приложений на
            React и его экосистеме, изучаю анимацию.
          </p>
          <p>Умею и люблю верстать.</p>
          <p>Владею слепым методом печати :)</p>
        </div>
        <img
          className='about__photo'
          src='/img/photo.png'
          width='169'
          height='169'
          alt='Мое фото'
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
