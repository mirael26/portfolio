import { BrowserRouter } from 'react-router-dom';
import RoutesWithAnimation from './components/routes-with-animation/routes-with-animation';
import Common from './components/common/common';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Common />

        <RoutesWithAnimation />
      </BrowserRouter>
    </div>
  );
};

export default App;
