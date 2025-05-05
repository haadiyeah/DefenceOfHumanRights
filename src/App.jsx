import { useState } from 'react';
import LandingPageA from './components/LandingPageA.jsx';
import LandingPageB from './components/LandingPageB';

function App() {
  const [version, setVersion] = useState(null);

  if (!version) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Select Landing Page Version</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className="px-8 py-4 bg-red-900 text-white rounded-md hover:bg-red-950 transition-colors"
              onClick={() => setVersion('A')}
            >
              VERSION A
            </button>
            <button
              className="px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-black transition-colors"
              onClick={() => setVersion('B')}
            >
              VERSION B
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {version === 'A' && <LandingPageA />}
      {version === 'B' && <LandingPageB />}
    </>
  );
}

export default App;