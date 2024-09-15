import React from 'react';
import Button from '../components/Button';

const ModelsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold mb-8">Agri Helper’s</h1>
      <Button label="Agri Assistant" />
      <Button label="Pest Detection" />
      <Button label="Crop Price Prediction" />
      <Button label="Coming Soon..." />
    </div>
  );
};

export default ModelsPage;
