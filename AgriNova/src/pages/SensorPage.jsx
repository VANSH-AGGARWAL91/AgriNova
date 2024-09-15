import React from 'react';
import Button from '../components/Button';

const SensorPage = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="text-5xl font-bold text-black text-left">
        <p>Do You</p>
        <p>Have Our</p>
        <p>Sensors?</p>
      </div>
      <div className="flex space-x-10 mt-10">
        <Button icon="fa-check-circle text-7xl text-green-500" onClick={() => handleClick('info2.html')} />
        <Button icon="fa-times-circle text-7xl text-red-500" onClick={() => handleClick('info2.html')} />
      </div>
    </div>
  );
};

export default SensorPage;
