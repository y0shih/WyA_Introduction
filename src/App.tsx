import React from 'react';
import './App.css';

// Import components
import MainPage from './pages/mainPage';
import SplashCursor from './Animations/SplashCursor/SplashCursor';

const App:React.FC = () => {
  return (
    <div className="App">
      <div className='elementShadow elementShadow1'></div>
      <div className='elementShadow elementShadow2'></div>
      <MainPage />
      <SplashCursor />
    </div>
  );
}

export default App;
