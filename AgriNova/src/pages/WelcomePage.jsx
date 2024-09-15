import React, { useState } from 'react';
import Button from '../components/Button';

const WelcomePage = () => {
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name.trim() !== '') {
      window.location.href = 'info1.html'; // Adjust the URL as needed
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div className="text-center flex items-center justify-center min-h-screen bg-white">
      <div>
        <div className="bg-green-400 text-white text-xl font-bold py-2 px-8 rounded-full mb-8">
          WELCOME!
        </div>
        <div className="mb-8">
          <i className="fas fa-user-circle text-6xl text-black"></i>
        </div>
        <div className="text-2xl font-bold text-black mb-4">Enter Your Name</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-full py-2 px-4 mb-8 text-center"
          placeholder="Enter Your Name"
        />
        <Button onClick={handleClick} icon="fa-arrow-right" />
      </div>
    </div>
  );
};

export default WelcomePage;
