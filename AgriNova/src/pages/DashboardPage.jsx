import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import Button from '../components/Button';

const DashboardPage = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleMLModelsClick = () => {
    window.location.href = "models.html";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex justify-around w-full mb-8">
        {[...Array(3)].map((_, index) => (
          <div className="relative" key={index}>
            <div className="w-16 h-16 rounded-full border-8 border-gray-200"></div>
            <div
              className="absolute top-0 left-0 w-16 h-16 rounded-full border-8 border-orange-600"
              style={{ clip: 'rect(0, 32px, 32px, 16px)' }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-around w-full mb-4 text-sm font-semibold">
        <span>Temperature</span>
        <span>Soil Moisture</span>
        <span>Humidity</span>
      </div>
      <div className="flex justify-around w-full mb-4">
        <Button label="Auto" />
        <Button label="Manual" />
      </div>
      <div className="mb-4 text-lg font-semibold">Pump Control</div>
      <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
      <Button onClick={handleMLModelsClick} label="ML Models ->" />
    </div>
  );
};

export default DashboardPage;
