"use client";
import Image from "next/image";
import React from "react";

type errorProps = {};

const error: React.FC<errorProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
      <div className="max-w-md p-8 bg-white border border-gray-300 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Image
          src="https://www.pexels.com/photo/close-up-shot-of-keyboard-buttons-2882552/"
          alt="Error Illustration"
          width={500}
          height={300}
          className="rounded-md"
        />
      </div>
    </div>
  );
};
export default error;
