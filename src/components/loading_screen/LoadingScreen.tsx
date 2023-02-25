import React, { FC } from "react";

const LoadingScreen: FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
