import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon } from './icons';

const ScriptOutput = ({ script, onScriptChange }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (script) {
      navigator.clipboard.writeText(script);
      setCopied(true);
    }
  };

  return (
    <div className="relative">
        <label htmlFor="script-output" className="block text-sm font-medium text-gray-300 mb-2">
            Generated Script
        </label>
        <div className="relative">
            <textarea
                id="script-output"
                readOnly={!script}
                value={script}
                onChange={onScriptChange}
                placeholder="Your generated script will appear here..."
                rows={12}
                className="block w-full bg-gray-900/50 border border-gray-600 rounded-lg shadow-sm sm:text-sm text-gray-200 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 resize-y"
            />
            {script && (
                <button
                onClick={handleCopy}
                className="absolute top-3 right-3 bg-gray-700/50 hover:bg-gray-600/70 text-gray-300 p-2 rounded-md transition-all duration-200"
                aria-label="Copy script"
                >
                {copied ? (
                    <span className="flex items-center text-green-400">
                        <CheckIcon className="h-5 w-5" />
                    </span>
                ) : (
                    <CopyIcon className="h-5 w-5" />
                )}
                </button>
            )}
        </div>
         {copied && (
            <div className="absolute top-14 right-3 text-xs bg-green-500/80 text-white px-2 py-1 rounded-md transition-opacity duration-300">
                Copied!
            </div>
        )}
    </div>
  );
};

export default ScriptOutput;