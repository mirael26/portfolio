import { motion } from 'framer-motion';
import { routeVariants } from '../../animation/variants';

const Skills = () => {
  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate='final'
      className='page skills'
    >
      <p style={{ color: 'white', fontSize: '50px' }}>Навыки</p>
    </motion.section>
  );
};

export default Skills;
