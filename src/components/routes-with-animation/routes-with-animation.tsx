import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppUrl } from '../../const';
import Main from '../main/main';
import About from '../about/about';
import Skills from '../skills/skills';
import Education from '../education/education';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import { AnimatePresence } from 'motion/react';

const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Navigate replace to={AppUrl.Main} />} />
        <Route path={AppUrl.Main} element={<Main />} />
        <Route path={AppUrl.About} element={<About />} />
        <Route path={AppUrl.Skills} element={<Skills />} />
        <Route path={AppUrl.Education} element={<Education />} />
        <Route path={AppUrl.Experience} element={<Experience />} />
        <Route path={AppUrl.Projects} element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesWithAnimation;
