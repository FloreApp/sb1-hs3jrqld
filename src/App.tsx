import React from 'react';
import { StarBackground } from './components/StarBackground';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

export default App;