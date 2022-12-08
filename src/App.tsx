import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppUrl } from './consts';
import AboutPage from './pages/aboutPage';
import EducationPage from './pages/educationPage';
import ExperiencePage from './pages/experiencePage';
import PortfolioPage from './pages/portfolioPage';
import SkillsPage from './pages/skillsPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppUrl.Main} element={<Navigate replace to={AppUrl.About}/>}/>
      <Route path={AppUrl.About} element={<AboutPage/>}/>
      <Route path={AppUrl.Skills} element={<SkillsPage/>}/>
      <Route path={AppUrl.Education} element={<EducationPage/>}/>
      <Route path={AppUrl.Experience} element={<ExperiencePage/>}/>
      <Route path={AppUrl.Portfolio} element={<PortfolioPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
