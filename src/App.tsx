import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RoutesWithAnimation from './components/routes-with-animation/routes-with-animation';
import Common from './components/common/common';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Common />

        <AnimatePresence>
          <RoutesWithAnimation />
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
};

export default App;
