import { motion } from 'framer-motion';
import { routeVariants } from '../../animation/variants';

const Education = () => {
  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate='final'
      className='page education'
    >
      <p style={{ color: 'white', fontSize: '50px' }}>Обучение</p>
    </motion.section>
  );
};

export default Education;
