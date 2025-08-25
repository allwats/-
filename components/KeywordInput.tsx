import React from 'react';

const KeywordInput = ({ value, onChange, disabled }) => {
  return (
    <div>
      <label htmlFor="keywords" className="block text-sm font-medium text-gray-300 mb-2">
        Enter your topic or keywords
      </label>
      <textarea
        id="keywords"
        name="keywords"
        rows={3}
        className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-200 placeholder-gray-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="e.g., 'quick summer makeup tips', 'a 30-second workout challenge', 'how to make the perfect coffee'"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default KeywordInput;