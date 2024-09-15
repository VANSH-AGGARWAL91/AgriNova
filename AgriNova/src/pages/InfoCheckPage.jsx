import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const statesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  // Add remaining states and cities
};

const InfoCheckPage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [userName, setUserName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
    setSelectedCity('');
  };

  const handleSubmit = () => {
    if (selectedState && selectedCity && userName) {
      setShowWelcome(true);
      setTimeout(() => {
        window.location.href = "/dashboard.html";
      }, 5000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showWelcome ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome, {userName}!</h1>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h1 className="text-4xl font-bold mb-4">Tell Us!</h1>
          <InputField placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
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
          <Button onClick={handleSubmit} icon="fa-arrow-right" />
        </div>
      )}
    </div>
  );
};

export default InfoCheckPage;
