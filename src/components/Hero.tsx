import React from 'react';
import { Atom } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen text-center px-4 -mt-16">
      <div className="animate-float">
        <Atom className="w-24 h-24 mb-6 text-purple-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
        Argon Labs
      </h1>
    </header>
  );
};