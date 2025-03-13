import React, { useState } from 'react';
import GradientSlide from './GradientSlide';
import LoginForm from './LoginForm';
import './styles.css';

function App() {
  const [isShifted, setIsShifted] = useState(false);

  const shiftContainer = () => {
    setIsShifted(!isShifted);
  };

  return (
    <div className="container">
      <GradientSlide isShifted={isShifted} />
      <LoginForm type="member" shiftContainer={shiftContainer} />
      <LoginForm type="admin" shiftContainer={shiftContainer} />
    </div>
  );
}

export default App;