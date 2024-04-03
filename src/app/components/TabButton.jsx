import React from "react";

const TabButton = ({ selectTab, active , children }) => {
  const buttonClasses = active
    ? 'text-white border-b border-violet-500'
    : 'text-[#ADB7BE]';
  return (
    <button onSelect={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
