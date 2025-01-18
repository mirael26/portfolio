import { motion } from 'motion/react';
import { routeVariants } from '../../animation/variants';

const Experience = () => {
  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate='final'
      className='page experience'
    >
      <p style={{ color: 'white', fontSize: '50px' }}>Опыт работы</p>
    </motion.section>
  );
};

export default Experience;
