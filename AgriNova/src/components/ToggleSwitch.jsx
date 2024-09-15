import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          checked={isOn}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-500'}`}
        ></label>
      </div>
      <label htmlFor="toggle" className={`${isOn ? 'text-green-500' : 'text-gray-500'}`}>
        {isOn ? 'ON' : 'OFF'}
      </label>
    </div>
  );
};

export default ToggleSwitch;
