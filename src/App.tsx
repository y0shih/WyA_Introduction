import React from 'react';
import './App.css';

// Import components
import MainPage from './pages/mainPage';

const App:React.FC = () => {
  return (
    <div className="App">
      <div className='elementShadow elementShadow1'></div>
      <div className='elementShadow elementShadow2'></div>
      <MainPage />
    </div>
  );
}

export default App;
