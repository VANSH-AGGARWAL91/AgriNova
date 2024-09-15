import React, { useState } from 'react';

const statesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  // Add remaining states and cities
};

const InfoPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedState && selectedCity) {
      window.location.href = 'sensor.html';
    } else {
      alert('Please select both state and city.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-4xl font-bold mb-4">Tell Us!</h1>
        <h2 className="text-4xl font-bold mb-8">About Your Land</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select your state</label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select your state</option>
            {Object.keys(statesAndCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Select your city</label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
          >
            <option value="">Select your city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <Button onClick={handleSubmit} icon="fa-arrow-right" />
      </div>
    </div>
  );
};

export default InfoPage;
