import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
};

export default LoadingSpinner;
