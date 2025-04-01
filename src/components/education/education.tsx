import { motion, Variants } from 'motion/react';
import { routeVariants } from '../../animation/variants';
import { useLocation } from 'react-router-dom';

const blockVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 1,
      mass: 0.5,
    },
  },
  close: { y: 222, opacity: 0 },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 1,
      mass: 0.5,
    },
  },
  close: { y: 222, opacity: 0 },
};

const Education = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      exit='exit'
      className='page education'
    >
      <motion.div
        className='education__blocks'
        variants={{
          open: {
            transition: {
              delayChildren: isTransitionFromMainPage ? 1.2 : 0.3,
              staggerChildren: 0.3,
            },
          },
        }}
        initial={'close'}
        animate={'open'}
      >
        <motion.div className='education__block' variants={blockVariants}>
          <h2 className='education__title'>Образование</h2>

          <motion.ul
            className='education__list'
            variants={{
              open: {
                transition: {
                  delayChildren: isTransitionFromMainPage ? 1.5 : 0.6,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial={'close'}
            animate={'open'}
          >
            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2008-2013</p>
                <p className='education__place'>СибУПК</p>
              </div>
              <p className='education__text'>Маркетинг (высшее)</p>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div className='education__block' variants={blockVariants}>
          <h2 className='education__title'>Курсы</h2>

          <motion.ul
            className='education__list'
            variants={{
              open: {
                transition: {
                  delayChildren: isTransitionFromMainPage ? 1.6 : 0.7,
                  staggerChildren: 0.1,
                },
              },
            }}
            initial={'close'}
            animate={'open'}
          >
            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2019</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>HTML и CSS, уровень 1</p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2020</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>HTML и CSS, уровень 2</p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2020</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>
                JavaScript. Профессиональная разработка веб-интерфейсов
              </p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2020</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>
                JavaScript. Архитектура клиентских приложений
              </p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2020</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>
                React. Разработка сложных клиентских приложений
              </p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2023</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>Основы Figma для верстальщика</p>
            </motion.li>

            <motion.li className='education__item' variants={itemVariants}>
              <div className='education__header'>
                <p className='education__date'>2024</p>
                <p className='education__place'>HTML Academy</p>
              </div>
              <p className='education__text'>Анимация для фронтендеров</p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
