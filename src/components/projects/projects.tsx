import { motion } from 'framer-motion';
import { routeVariants } from '../../animation/variants';

const Projects = () => {
  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate='final'
      className='page projects'
    >
      <p style={{ color: 'white', fontSize: '50px' }}>Проекты</p>
    </motion.section>
  );
};

export default Projects;
