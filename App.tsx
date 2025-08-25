import React, { useState, useCallback } from 'react';
import KeywordInput from './components/KeywordInput';
import GenerateButton from './components/GenerateButton';
import ScriptOutput from './components/ScriptOutput';
import { generateScript } from './services/geminiService';

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [script, setScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateScript = useCallback(async () => {
    if (!keywords.trim()) {
      setError('Please enter some keywords to generate a script.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setScript('');

    try {
      const generatedScript = await generateScript(keywords);
      setScript(generatedScript);
    } catch (err) {
      setError('Failed to generate script. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [keywords]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-500/10 border border-gray-700/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              AI Instagram Script Generator
            </h1>
            <p className="text-gray-400 mt-2">
              Generate engaging scripts for your Reels & Stories in seconds.
            </p>
          </header>

          <main className="space-y-6">
            <KeywordInput
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              disabled={isLoading}
            />
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            <GenerateButton
              onClick={handleGenerateScript}
              isLoading={isLoading}
            />

            <ScriptOutput 
              script={script}
              onScriptChange={(e) => setScript(e.target.value)}
            />
          </main>
        </div>
        <footer className="text-center py-4 bg-black/20 border-t border-gray-700/50">
          <p className="text-xs text-gray-500">Powered by Gemini AI</p>
        </footer>
      </div>
    </div>
  );
};

export default App;