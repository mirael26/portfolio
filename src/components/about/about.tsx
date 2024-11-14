import { motion } from 'framer-motion';
import { routeVariants } from '../../animation/variants';

const About = () => {
  return (
    <motion.section
      variants={routeVariants}
      initial='initial'
      animate='final'
      className='page about'
    >
      <p style={{ color: 'white', fontSize: '50px' }}>Обо мне</p>
    </motion.section>
  );
};

export default About;
