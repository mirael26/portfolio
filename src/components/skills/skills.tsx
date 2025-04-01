import { motion, Variants } from 'motion/react';
import { routeVariants } from '../../animation/variants';
import { useLocation } from 'react-router-dom';
import { MouseEvent } from 'react';

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      // delay: 0.3,
      // duration: 0.3,
      type: 'spring',
      bounce: 1,
      mass: 0.5,
    },
  },
  close: { y: 222, opacity: 0 },
  // exit: { y: -222, opacity: 0 },
};

const Skills = () => {
  const location = useLocation();

  const isTransitionFromMainPage = !!location.state?.fromMain;

  const handleIconsMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    const icons = evt.currentTarget;
    const icon = evt.target as HTMLImageElement;
    const iconName = icons.querySelector('.skills__icon-name');
    const namePosition = icon.dataset.namePosition;
    if (
      !(icon instanceof HTMLImageElement) ||
      !icon.classList.contains('skills__icon') ||
      !namePosition ||
      !iconName
    ) {
      return;
    }

    icons.classList.add('hover');
    icon.classList.add('active');
    iconName.textContent = icon.alt;
    iconName.classList.add(namePosition);

    const handleIconMouseOut = () => {
      icons.classList.remove('hover');
      icon.classList.remove('active');
      iconName.classList.remove(namePosition);
      icon.removeEventListener('mouseout', handleIconMouseOut);
    };

    icon.addEventListener('mouseout', handleIconMouseOut);
  };

  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate={isTransitionFromMainPage ? 'finalFromMain' : 'final'}
      exit='exit'
      className='skills'
    >
      <h2 className='skills__title'>Навыки</h2>
      <motion.div
        className='skills__content'
        variants={{
          open: {
            transition: {
              // type: 'spring',
              // ease: 'easeOut',
              // duration: 0.5,
              // delay: 0.8,
              // delayChildren: 0.7,
              delayChildren: isTransitionFromMainPage ? 1.6 : 0.7,
              staggerChildren: 0.2,
            },
          },
          close: {
            transition: {
              // type: 'spring',
              // ease: 'easeOut',
              // duration: 0.5,
              // delay: 0.8,
              // delayChildren: 0.8,
              delayChildren: 2,
              staggerChildren: 0.2,
            },
          },
        }}
        initial={'close'}
        animate={'open'}
      >
        <motion.div className='skills__block' variants={itemVariants}>
          <h3 className='skills__block-title'>Графика</h3>
          <div className='skills__icons' onMouseOver={handleIconsMouseOver}>
            <img
              className='skills__icon'
              src='/img/icon-figma.svg'
              alt='Figma'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-photoshop.svg'
              alt='Photoshop'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-ai.svg'
              alt='Illustrator'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-corel.svg'
              alt='Corel Draw'
              width='40'
              height='40'
              data-name-position='top'
            />
            <p className='skills__icon-name' data-name></p>
          </div>
        </motion.div>

        <motion.div className='skills__block' variants={itemVariants}>
          <h3 className='skills__block-title'>Верстка</h3>
          <div className='skills__icons' onMouseOver={handleIconsMouseOver}>
            <img
              className='skills__icon'
              src='/img/icon-html5.svg'
              alt='HTML'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-css3.svg'
              alt='CSS'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-pug.svg'
              alt='Pug'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-sass.svg'
              alt='SCSS'
              width='40'
              height='40'
              data-name-position='top'
            />
            <p className='skills__icon-name' data-name></p>
          </div>
          <ul className='skills__text-list'>
            <li>
              <p className='skills__text'>flexbox</p>
            </li>
            <li>
              <p className='skills__text'>БЭМ</p>
            </li>
            <li>
              <p className='skills__text'>адаптивная верстка</p>
            </li>
            <li>
              <p className='skills__text'>кроссбраузерная верстка</p>
            </li>
          </ul>
        </motion.div>

        <motion.div className='skills__block' variants={itemVariants}>
          <h3 className='skills__block-title'>JavaScript</h3>
          <div className='skills__icons' onMouseOver={handleIconsMouseOver}>
            <img
              className='skills__icon'
              src='/img/icon-js.svg'
              alt='JavaScript'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-ts.svg'
              alt='TypeScript'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-react.svg'
              alt='React'
              width='40'
              height='40'
              data-name-position='bottom'
            />
            <img
              className='skills__icon'
              src='/img/icon-redux.svg'
              alt='Redux'
              width='40'
              height='40'
              data-name-position='top'
            />
            <img
              className='skills__icon'
              src='/img/icon-webpack.svg'
              alt='Webpack'
              width='40'
              height='40'
              data-name-position='top'
            />
            <img
              className='skills__icon'
              src='/img/icon-jest.svg'
              alt='Jest'
              width='40'
              height='40'
              data-name-position='top'
            />
            <p className='skills__icon-name' data-name></p>
          </div>
          <ul className='skills__text-list'>
            <li>
              <p className='skills__text'>react hooks</p>
            </li>
            <li>
              <p className='skills__text'>react classes</p>
            </li>
            <li>
              <p className='skills__text'>react-hook-form</p>
            </li>
            <li>
              <p className='skills__text'>rest api</p>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
