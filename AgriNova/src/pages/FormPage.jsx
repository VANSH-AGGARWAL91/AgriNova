import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const FormPage = () => {
  const handleRedirect = () => {
    window.location.href = 'dashboard.html';
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <InputField placeholder="Enter Field Area" />
      <InputField placeholder="Enter Current Crop" />
      <InputField placeholder="Enter Previous Crop" />
      <InputField placeholder="Enter Soil Type" />
      <Button onClick={handleRedirect} icon="fa-chevron-right" />
    </div>
  );
};

export default FormPage;
