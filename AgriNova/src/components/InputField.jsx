import React from 'react';

const InputField = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="bg-gray-200 text-black font-bold py-2 px-4 rounded-full w-64 text-center"
    />
  );
};

export default InputField;
