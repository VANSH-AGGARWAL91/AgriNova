import React from 'react';

const Button = ({ onClick, label, icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-300 text-black font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center"
    >
      {icon && <i className={`fas ${icon}`}></i>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
