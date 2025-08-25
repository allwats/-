import React from 'react';
import { SpinnerIcon } from './icons';

const GenerateButton = ({ onClick, isLoading }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
    >
      {isLoading ? (
        <>
          <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          Generating...
        </>
      ) : (
        'Generate Script'
      )}
    </button>
  );
};

export default GenerateButton;